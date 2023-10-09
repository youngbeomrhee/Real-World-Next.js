import axios from 'axios'
import Link from 'next/link'
import { useEffect } from 'react'

export async function getServerSideProps() {
  const userReq = await axios.get('http://localhost:3000/api/04/users')
  return {
    props: {
      users: userReq.data,
    },
  }
}

function HomePage({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
            {user.username}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default HomePage
