import '../styles/globals.css'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
}
