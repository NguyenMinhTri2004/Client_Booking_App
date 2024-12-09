import { providerFacebook, providerGoogle } from "@/firebase/config";
import { auth } from "@/firebase/config";
import { signInWithPopup} from "firebase/auth";

export const loginWithGoogle = async () => {

    try{
       
          const res = await signInWithPopup(auth , providerGoogle)
          console.log(res.user);
          return res.user

    }catch(err){
          console.error(err);
    }
}



export const loginWithFacebook = async () => {

    try{
       
          const res = await signInWithPopup(auth , providerFacebook)
          console.log(res.user);
          return res.user
          
    }catch(err){
          console.error(err);
    }
}