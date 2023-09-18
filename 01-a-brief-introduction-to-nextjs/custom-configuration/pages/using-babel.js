export default function Home() {
  console.log('Hello, World!')
  console.log(Math.random() * 10)
  Math.random() |> (x) => x * 10 |> console.log
  return <h1>Using babel</h1>
}
