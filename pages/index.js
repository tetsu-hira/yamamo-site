import Head from 'next/head'
import Image from 'next/image'
import Slider from './Slider'
import Intro from './Intro'
import Main from './Main'
import Band from './Band'

export default function Home() {
  return (
    <div className="font-body">
      <Head>
        <meta name="description" content="これはトップページです" />
        <meta property="og:title" content="トップページ" />
        <meta property="og:description" content="これはトップページ" />
        <title>生産管理の5S活動</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
      </Head>
      <main>
        <div>
          <Slider />
          <Intro />
          <Main />
          <Band />
        </div>
      </main>
    </div>
  )
}
