import { AnyAction, ThunkMiddleware, configureStore } from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { useMemo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

export enum CartActionType {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
  SET_INITIAL_DATA = 'set_initial_data', // 초기 데이터를 설정하는 액션 유형 추가
}

export interface CartAction {
  id: string
  type: CartActionType
  data?: CartState[]
}

let store:
  | ToolkitStore<CartState, CartAction, [ThunkMiddleware<CartState, AnyAction>]>
  | undefined
function initStore(preloadedState = initialState) {
  return configureStore({
    reducer,
    preloadedState,
    devTools: true,
  })
}

export const initializeStore = (preloadedState: CartState) => {
  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
}

export interface CartState {
  [key: string]: number
}
const initialState: CartState = {}

const reducer = (state = initialState, action: CartAction) => {
  const itemID = action.id

  switch (action.type) {
    case CartActionType.INCREMENT:
      const newItemAmount = itemID in state ? state[itemID] + 1 : 1
      return {
        ...state,
        [itemID]: newItemAmount,
      }
    case CartActionType.DECREMENT:
      if (state?.[itemID] > 0) {
        return {
          ...state,
          [itemID]: state[itemID] - 1,
        }
      }
      return state
    case CartActionType.SET_INITIAL_DATA:
      debugger
      return {
        ...state,
        ...action.data, // 서버에서 가져온 초기 데이터를 스토어에 병합
      }
    default:
      return state
  }
}

export function useStore(initialState: CartState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export function useGlobalItems(): CartState {
  return useSelector((state: CartState) => state, shallowEqual)
}
