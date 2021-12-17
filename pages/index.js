import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <meta name="description" content="これはトップページです" />
        <meta property="og:title" content="トップページ" />
        <meta property="og:description" content="これはトップページ" />
        <title>生産管理の5S活動</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <img src="/TOP.jpg" />
        </div>
      </main>

      
    </div>
  )
}
