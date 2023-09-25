import Link from 'next/link'

export default function Links() {
  return (
    <ul>
      <li>
        <Link href="/posts">/posts</Link>
      </li>
      <li>
        <Link
          href={{
            pathname: '/posts/[date]/[slug]',
            query: {
              date: '2020-01-01',
              slug: 'happy-new-year',
              foo: 'bar',
            },
          }}
        >
          /posts/2020-01-01/happy-new-year?foo=bar
        </Link>
      </li>
    </ul>
  )
}
