
import '@/styles/main.scss';
import Layout from '@/common/components/Layout';

 
export default function MyApp({ Component, pageProps } : any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}