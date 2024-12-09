import CheckResetPasswordToken from "@/modules/App/CheckResetPasswordToken"
import { useRouter } from "next/router"

const CheckResetPasswordTokenPage = (props : any) => {

    const router = useRouter()
   
    const  token = router?.query?.token
    
    return (
           <div className = "mt-[20%]" >
                <CheckResetPasswordToken token = {token}/>
           </div>
    )
}

export default CheckResetPasswordTokenPage
