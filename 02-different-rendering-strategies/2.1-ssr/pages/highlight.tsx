import { useRouter } from 'next/router'
import Head from 'next/head'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'

function Highlight({ code, language = 'js' }) {
  const { asPath } = useRouter()

  hljs.registerLanguage('javascript', javascript)
  hljs.initHighlighting()

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/highlight.css" />
      </Head>
      <pre>
        <code className={language}>{code}</code>
      </pre>
    </>
  )
}

export default Highlight
