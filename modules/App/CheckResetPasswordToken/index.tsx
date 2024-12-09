
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';
import { useCallback, useEffect, useState } from "react";
import { checkResetPasswordEmailToken } from "@/common/api/user";
import { ButtonBlue } from "@/common/components/Button";
import Link from 'next/link';
import { handleApi } from "@/common/utils";
import { Button, Input, Space, Form } from 'antd/lib';
// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const CheckResetPasswordToken = ({token}: any) => {

    console.log("Token", token)

    const [password1, setPassword1] = useState("")

    const [password2, setPassword2] = useState("")

    const handleRefreshPassword = async () => {
         if(!password1 || !password2) {
            toast.error("Không được để trống mật khẩu và mật khẩu nhập lại");
            return;
         }else if(password1 !== password2) {
            toast.error("Mật khẩu nhập lại và mật khẩu không trùng khớp");
            return;
         }

        const response:any = await handleApi(checkResetPasswordEmailToken(false, token));

        if (response.success) {
            toast.success(response?.message);
        }
    }
    
    return (
        <Section>
            <SectionBody>
            <Space className = "flex items-center justify-center"  direction="vertical">
                <Form>
                    <div className = "flex items-center justify-center" >
                        <p className = "font-bold text-20" >Đặt lại mật khẩu</p>
                    </div>
                    <Form.Item rules={[{ required: true, message: 'Please input your password!', whitespace: true }]}>
                         <Input.Password  value = {password1} onChange={(e) => setPassword1(e.target.value)} placeholder="Mật khẩu" />
                    </Form.Item>

                    <Form.Item rules={[{ required: true, message: 'Please input your confirm password!', whitespace: true }]}  >
                         <Input.Password value = {password2} onChange={(e) => setPassword2(e.target.value)} placeholder="Nhập lại mật khẩu" />
                    </Form.Item>
                    <div onClick = {() => handleRefreshPassword()}>
                        <ButtonBlue>
                            <p>Thay đổi mật khẩu</p>
                        </ButtonBlue>
                    </div>
                </Form>
                   
                   
                    
            </Space>
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
            </SectionBody>
        </Section>
    )
}

export default CheckResetPasswordToken