import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import cartContext, { Items } from '@/components/context/cartContext'
import { useState } from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState<Items>({})
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <cartContext.Provider value={{ items, setItems }}>
        <Navbar />
        <div className="w-9/12 m-auto pt-10">
          <Component {...pageProps} />
        </div>
      </cartContext.Provider>
    </>
  )
}

export default MyApp
