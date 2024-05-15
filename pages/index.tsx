
import type { ReactElement } from 'react'
import Layout from "@/common/components/Layout"
import type { NextPageWithLayout } from './_app'
import Home from '@/modules/Home'
import SignIn from '@/modules/App/SignIn'

// export default function Page() {
//     return (
//        <div className="flex flex-col" >
//          <Header/>
//         <div className="my-20" >
//           <Home/>
//         </div> 
//         <Footer/>
//        </div> 
      
//     )
// }

const Page: NextPageWithLayout = () => {
  return (
     <Home/>
  )
}
 

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
        {page}
    </Layout>
  )
}

export default Page