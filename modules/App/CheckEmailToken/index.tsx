
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';
import { useCallback, useEffect, useState } from "react";
import { checkEmailToken } from "@/common/api/access";
import { ButtonBlue } from "@/common/components/Button";
import Link from 'next/link';
import Cookies from 'js-cookie';
import { handleApi } from "@/common/utils";
import { debounce } from "lodash";
import { useAuthStore } from '@/zustand/auth/store';

interface Metadata {
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  }

const CheckEmailToken = ({token}: any) => {


    console.log("Token", token)

    const [verified, setVerified] = useState(true)

    const changeMode = useAuthStore(state => state?.changeMode)

    const addUserInfo = useAuthStore(state => state?.addUserInfo)

    const handleGetAPI = useCallback(
        debounce(async (token) => {
        //   setLoading(true);
          try {
            console.log("token: " + token);
            const response:any = await handleApi(checkEmailToken(false, token))
    
            if (response.success) {
            //   setData(response.data?.data?.data);
                console.log(response?.metadata?.tokens?.accessToken)
                Cookies.set('accessToken', response?.metadata?.tokens?.accessToken);
                Cookies.set('refreshToken', response?.metadata?.tokens?.refreshToken);
                Cookies.set('userInfo', response?.data?.metadata?.user);
                Cookies.set('userId', response?.data?.metadata?.user?.userId);
                addUserInfo(response?.data?.metadata?.user)
                changeMode(true)
            }
          } catch (error) {
            console.log('handleGetAPI error', error);
          }
        //   setLoading(false);
        }, 500),
        []
    );


    useEffect(() => {
      if(token) {
        handleGetAPI(token);
      }
    }, [token]);
    
    // useEffect(() => {
    //     if (token) {
    //         // const tmp = await handleApi(checkEmailToken(false, token))
    //         // console.log("Tmp", tmp)
    //         // if (tmp.success) {
    //         //     setData(response.data?.data?.data);
    //         // }
    //         // checkEmailToken(false, token + "")
    //         //     .then(( data:any ) => {
    //         //         console.log("checkEmailToken data", data);
    //         //         setVerified(true);
    //         //         // console.log('accessToken', data?.data?.metadata?.metadata?.tokens?.accessToken)
    //         //         Cookies.set('accessToken', data?.data?.metadata?.metadata?.tokens?.accessToken);
    //         //         Cookies.set('refreshToken', data?.data?.metadata?.metadata?.tokens?.refreshToken);
    //         //     })
    //         //     .catch((error) => {
    //         //         setVerified(false);
    //         //         console.error("Error fetching accommodation", error);
    //         //     });
    //     }
    // }, [token]);
    
    return (
        <Section>
            <SectionBody>
                <div className = "flex items-center justify-center flex-col w-1/2 mx-auto mb-[10%]">
                   
                   {
                     verified ?
                    <div>
                        <p className = "text-2xl font-bold" >Bạn đã xác thực email thành công</p>
                        <Link href = "/"  >
                                <ButtonBlue>
                                        Quay trở về trang chủ
                                </ButtonBlue>
                        </Link> 
                    </div> :

                    <div>
                        <p>Đã hết thời gian xác thực</p>
                        <Link href = "/signin"  >
                                <ButtonBlue>
                                        Quay trở về trang đăng nhập
                                </ButtonBlue>
                        </Link> 
                    </div>

                    // <Link href = "/signin"  >
                    //         <ButtonBlue>
                    //                 Quay về trang đăng nhập
                    //         </ButtonBlue>
                    // </Link>
                       
                   }
                </div>
            </SectionBody>
        </Section>
    )
}

export default CheckEmailToken