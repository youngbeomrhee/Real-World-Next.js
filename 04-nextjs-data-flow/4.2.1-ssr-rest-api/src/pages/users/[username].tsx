import Link from 'next/link'
import axios from 'axios'

export async function getServerSideProps(ctx) {
  const { username } = ctx.query

  const userReq = await axios.get(
    `${process.env.API_ENDPOINT}/api/04/users/${username}`,
    {
      headers: {
        authorization: process.env.API_TOKEN,
      },
    }
  )

  if (userReq.status === 404) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: userReq.data,
      apiEndpoint: process.env.API_ENDPOINT,
    },
  }
}

function UserPage({ user, apiEndpoint }) {
  return (
    <div style={{ display: 'flex' }}>
      <img
        src={`${apiEndpoint}${user.profile_picture}`}
        alt={user.username}
        width={150}
        height={150}
      />
      <div>
        <div>
          <b>Username:</b> {user.username}
        </div>
        <div>
          <b>Full name:</b> {user.first_name} {user.last_name}
        </div>
        <div>
          <b>Email:</b> {user.email}
        </div>
        <div>
          <b>Company:</b> {user.company}
        </div>
        <div>
          <b>Job title:</b> {user.job_title}
        </div>
      </div>
    </div>
  )
}

export default UserPage
