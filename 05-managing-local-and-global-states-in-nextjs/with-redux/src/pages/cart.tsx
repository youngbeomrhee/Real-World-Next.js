import { Item } from '@/components/ProductCard'
import data from '@/data/items'
import { CartActionType, CartState, useGlobalItems } from '@/redux/store'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function getServerSideProps() {
  // 해당 페이지에서 필요한 데이터 fetch
  // fetch의 결과로 아래와 같은 장바구니 상태를 받아왔다고 가정
  const dataFromServer = {
    '7109-a115': 1,
    '9126-b921': 3,
    '4192-p192': 2,
  }

  return {
    props: {
      dataFromServer,
    },
  }
}

function getFullItem(id: string, data: Item[]) {
  const idx = data.findIndex((item) => item.id === id)
  return data[idx]
}

function Cart({ dataFromServer }: { dataFromServer: CartState[] }) {
  const dispatch = useDispatch()

  // 서버에서 가져온 데이터를 Redux 스토어에 디스패치하여 초기 상태 설정
  useEffect(() => {
    dispatch({ type: CartActionType.SET_INITIAL_DATA, data: dataFromServer })
  }, [dataFromServer])

  const items = useGlobalItems()

  const total = Object.keys(items)
    .map((id) => getFullItem(id, data).price * items[id])
    .reduce((prices, sum) => sum + prices, 0)

  const amounts = Object.keys(items).map((id) => {
    const item = getFullItem(id, data)
    return { item, amount: items[id] }
  })

  return (
    <div>
      <h1 className="text-xl font-bold"> Total: ${total} </h1>
      <div>
        {amounts.map(({ item, amount }) => (
          <div key={item.id}>
            x{amount} {item.name} (${amount * item.price})
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
