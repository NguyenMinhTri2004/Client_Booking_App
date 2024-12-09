import CheckEmailToken from "@/modules/App/CheckEmailToken"
import { useRouter } from "next/router"

const CheckEmailTokenPage = (props : any) => {

    const router = useRouter()
   
    const  token = router?.query?.token
    
    return (
           <div className = "mt-[20%]" >
                <CheckEmailToken token = {token}/>
           </div>
    )
}

export default CheckEmailTokenPage
