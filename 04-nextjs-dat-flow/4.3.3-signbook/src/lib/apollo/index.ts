import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { useMemo } from 'react'

const uri = 'api/graphql'
let apolloClient

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri }),
    cache: new InMemoryCache(),
  })
}

export function initApollo(initialState) {
  const client = apolloClient || createApolloClient()

  if (initialState) {
    const existingCache = client.extract()
    client.cache.restore({ ...existingCache, ...initialState })
  }

  if (typeof window === 'undefined') {
    return client
  }

  if (!apolloClient) {
    apolloClient = client
  }

  return client
}

export function useApollo(initialState) {
  return useMemo(() => initApollo(initialState), [initialState])
}
