import cartContext, { Product } from '@/components/context/cartContext'
import { useContext } from 'react'
import data from '@/data/items'

function getFullItem(id: string, data: Product[]) {
  const idx = data.findIndex((item) => item.id === id)
  return data[idx]
}
function Cart() {
  const { items } = useContext(cartContext)
  const total = Object.keys(items)
    .map((id) => getFullItem(id, data).price * items[id])
    .reduce((n, acc) => acc + n, 0)
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
