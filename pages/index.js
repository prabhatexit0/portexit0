import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer, Navbar, Main } from '../components'

export default function Home() {
  return (
    <div className="bg-gray-900 h-screen w-screen">
      <Head>
        <title>Prabhat Sachdeva</title>
        <meta name="description" content="its my portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
    </div>
  )
}
