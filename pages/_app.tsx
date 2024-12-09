
import '@/styles/main.scss';
import Layout from '@/common/components/Layout';
import NextNProgress from 'nextjs-progressbar';
 
export default function MyApp({ Component, pageProps } : any) {
  return (
    <Layout>
      <NextNProgress/>
      <Component {...pageProps} />
    </Layout>
  )
}