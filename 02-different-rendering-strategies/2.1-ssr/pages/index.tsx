export async function getServerSideProps() {
  const userRequest = await fetch(
    'https://jsonplaceholder.typicode.com/posts/1'
  )
  const userData = await userRequest.json()
  return {
    props: {
      user: userData,
    },
  }
}

function IndexPage(props) {
  return <div>Welcome, {props.user.userId}</div>
}

export default IndexPage
