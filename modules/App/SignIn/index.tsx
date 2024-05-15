
import { Button, Checkbox, Form, Input } from 'antd/lib';
import { ButtonBlue } from '@/common/components/Button';
import { Facebook, Google } from 'iconsax-react';

const SignIn = (props : any) => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className='mt-[10%] flex items-center justify-center w-full' >
            <div className='flex items-center justify-center flex-col' >
                 <p className='text-xl font-bold mb-3' >Đăng nhập hoặc tạo tài khoản</p>
                <Form
                    name="normal_login"
                    className="login-form w-full"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
        >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <label>Email</label>
                        <Input  className="site-form-item-icon"  placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <label>Password</label>
                        <Input
                        className="site-form-item-icon" 
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item> */}

                        <a className="login-form-forgot" href="">
                        Forgot password ?
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <ButtonBlue type="primary" htmlType="submit" className="login-form-button">
                                Tiếp tục với email
                        </ButtonBlue>
                        <p className='text-center text-slate-500 mt-5' >hoặc sử dụng một trong các lựa chọn này</p>
                    </Form.Item>

                 
                    <div className='flex items-center gap-5 justify-center' >
                         <Facebook className='cursor-pointer' size="32" color="blue" variant="Bold"/>
                         <Google className='cursor-pointer' size="32" color="red" variant="Bold"/>
                    </div>
                </Form>
            </div>
        </div>
        
    )
}

export default SignIn