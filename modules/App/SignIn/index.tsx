
import { Button, Checkbox, Form, Input } from 'antd/lib';
import { ButtonBlue } from '@/common/components/Button';
import Image from 'next/image';
import { signIn, signUp } from '@/common/api/access';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { loginWithFacebook, loginWithGoogle } from '@/common/utils/o2auth';
import Cookies from 'js-cookie';
import { useAuthStore } from '@/zustand/auth/store';

const SignIn = (props : any) => {

    const [form] = Form.useForm();

    const changeMode = useAuthStore(state => state?.changeMode)

    const addUserInfo = useAuthStore(state => state?.addUserInfo)

    const onFinish = async (values: any) => {
        console.log('Received values of form: ', values);
        await signIn(false, {email : values?.email}).then((response) => {
            console.log(response);
            toast.success(response?.data?.message);
        }).catch((error) => {
            toast.error(error)   
            console.error(error);
        });
    };

    const handleLoginWithFacebook = async () => {
        const response = await loginWithFacebook()
        console.log(response);
        await signUp(false, {email : response?.email || "exampleEmail", name : response?.displayName, authFacebookId : response?.uid, authType : "facebook", phoneNumber : response?.phoneNumber, avatar : response?.photoURL}).then((response:any) => {
            console.log(response);
            Cookies.set('accessToken', response?.data?.metadata?.tokens?.accessToken);
            Cookies.set('refreshToken', response?.data?.metadata?.tokens?.refreshToken);
            addUserInfo(response?.data?.metadata?.user)
            Cookies.set('userId', response?.data?.metadata?.user?.userId);
            toast.success(response?.data?.message);
            changeMode(true)
        }).catch((error) => {
            toast.error(error)   
            console.error(error);
        });
    }


    const handleLoginWithGoogle = async () => {
        const response = await loginWithGoogle()
        console.log(response);
        await signUp(false, {email : response?.email || "exampleEmail", name : response?.displayName, authGoogleId : response?.uid, authType : "google", phoneNumber : response?.phoneNumber, avatar : response?.photoURL}).then((response:any) => {
            console.log(response);
            Cookies.set('accessToken', response?.data?.metadata?.tokens?.accessToken);
            Cookies.set('refreshToken', response?.data?.metadata?.tokens?.refreshToken);
            Cookies.set('userId', response?.data?.metadata?.user?.userId);
            addUserInfo(response?.data?.metadata?.user)
            toast.success(response?.data?.message);
            changeMode(true)
        }).catch((error) => {
            toast.error(error)   
            console.error(error);
        });
    }

    return (
        <div className='mt-[10%] flex items-center justify-center w-full' >
            <div className='flex items-left justify-center flex-col w-[25%]' >
                 <p className='text-2xl font-bold mb-3' >Đăng nhập hoặc tạo tài khoản</p>
                <Form
                    name="normal_login"
                    form={form}
                    className="login-form w-full"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    scrollToFirstError
        >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                              type: 'email',
                              message: 'E-mail không hợp lệ',
                            },
                            {
                              required: true,
                              message: 'Vui lòng nhập địa chỉ E-mail của bạn',
                            },
                        ]}
                    >
                        {/* <label className='font-bold  text-base' >Địa chỉ email</label> */}
                        <Input  className="site-form-item-icon p-2 rounded-[0.2rem] border-slate-600"  placeholder="Vui lòng nhập đia chỉ email" />
                    </Form.Item>

                    <Form.Item>
                        <ButtonBlue type="primary" htmlType="submit" className="login-form-button">
                                Tiếp tục với email
                        </ButtonBlue>
                    </Form.Item>


                        <div className='flex items-center gap-2 justify-center my-5' >
                            <span className='h-[1px] bg-slate-300 w-[15%]' ></span>
                            <p className='text-center w-[70%] text-slate-800' >hoặc sử dụng một trong các lựa chọn này</p>
                            <span className='h-[1px] bg-slate-300 w-[15%]' ></span>
                        </div>

                 
                    <div className='flex items-center gap-5 justify-center' >
                         {/* <Facebook className='cursor-pointer' size="32" color="blue" variant="Bold"/>
                         <Google className='cursor-pointer' size="32" color="red" variant="Bold"/> */}
                         <span onClick={() => handleLoginWithFacebook()}  className='cursor-pointer border border-slate-200 p-5 rounded-sm hover:border-blue-400 transition duration-300 ease-in-out ' >
                            <Image
                                    src="/svg/social/facebook.svg"
                                    height={32}
                                    width={32}
                                    alt="Facebook Login"
                                    // objectFit="contain"
                                    objectPosition="contain"
                            />
                         </span>

                         <span onClick={() => handleLoginWithGoogle()}   className='cursor-pointer border border-slate-200 p-5 rounded-sm hover:border-blue-400 transition duration-300 ease-in-out' >
                            <Image
                                    src="/svg/social/google.svg"
                                    height={32}
                                    width={32}
                                    alt="Google Login"
                                    // objectFit="contain"
                                    objectPosition="contain"
                            />
                         </span>
                    </div>

                    <div className='border-t pt-5 mt-7 border-slate-300' >
                            <p className='flex text-center text-[0.8rem]'>Qua việc đăng nhập hoặc tạo tài khoản, bạn đồng ý với các Điều khoản và Điều kiện cũng như Chính sách An toàn và Bảo mật của chúng tôi</p>

                            <p className='text-center text-[0.8rem] mt-2' >Bảo lưu mọi quyền. <br></br>
                            Bản quyền (2006 - 2024) - Booking.com™</p>
                    </div>
                </Form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition = {Bounce}
            />
            <ToastContainer />

        </div>
        
    )
}

export default SignIn