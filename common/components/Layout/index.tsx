import Header from "../Header"
import Footer from "../Footer"

export default function Layout({ children } : any) {
    return (
      <>
        <Header/>
        <div>
            <main>{children}</main>
        </div>
        <Footer />
      </>
    )
  }