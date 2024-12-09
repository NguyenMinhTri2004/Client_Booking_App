
import {Tabs,Button,Form,Input,Select,DatePicker, Upload, message, Switch } from 'antd/lib';
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';
import { useEffect, useState } from 'react';
import { getAll } from '@/common/api/Strapi/setting';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { ButtonBlue } from '@/common/components/Button';
import Image from 'next/image';
import ConfirmPopUp from '@/common/components/Popup/Confirm';
import type { PopconfirmProps, GetProp, UploadProps } from 'antd/lib';
import { useRouter } from 'next/router';
import type { DatePickerProps } from 'antd/lib';
import { getProfile, updateProfile, resetPassword, deleteProfile} from '@/common/api/user';
import { handleApi, formatDate, validateCreditCard, removeUndefinedValues } from "@/common/utils";
import { useAuthStore } from '@/zustand/auth/store';
const { Option } = Select;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { uploadAvatar } from '@/common/api/upload';
import Cookies from 'js-cookie';
import { getAllCard, deleteCard, createCard } from '@/common/api/card';
import { getAllAccompanyingPerson , createAccompanyingPerson, deleteAccompanyingPerson } from '@/common/api/accompanyingPerson';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const Personal = (props : any) => {

    const [form] = Form.useForm();

    const [formCard] = Form.useForm()

    const [formAccompanyingPerson] = Form.useForm()

    const [imageUrl, setImageUrl] = useState<string>()

    const [loading, setLoading] = useState(false);

    const changeMode = useAuthStore(state => state.changeMode)

    const handleChange: UploadProps['onChange'] = async (info:any) => {
      const formData = new FormData();
      formData.append('file', info?.file?.originFileObj);
      setLoading(true);
      const data:any = await handleApi(uploadAvatar(false, formData))
      if (data.success) {
        setImageUrl(data?.metadata?.thumb_url)
        setLoading(false);
      }
    };


    const uploadButton = (
      <button style={{ border: 0, background: 'none' }} type="button">
         {loading ? <LoadingOutlined /> : <PlusOutlined />}
         <div style={{ marginTop: 8 }}>Upload</div>
    </button>
    );

    const onFinish = async (values: any) => {
        let data = removeUndefinedValues(values);
        data = {
          ...data,
          avatar : imageUrl
        }
        const response:any = await handleApi(updateProfile(false, data));
        if (response.success) {
        toast.success(response?.message);
        }
    };

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
      console.log(date, dateString);
    };

    const router = useRouter()

    const index = router?.query?.index

    const prefixSelector = (
        <Form.Item noStyle>
          <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
        </Form.Item>
    );
    
    
    const [listSetting, setListSetting] = useState([])

    const [dataProfile, setDataProfile] = useState<any>(null)

    const [isMoneyEdit, setIsMoneyEdit] = useState(false)

    const [isLanguageEdit, setIsLanguageEdit] = useState(false)

    const [listCard, setListCard] = useState([])

    const [listAccompanyingPerson, setListAccompanyingPerson] = useState([])

    const [isAccompanyingPersonEdit, setIsAccompanyingPersonEdit] = useState(false)

    const [isCardEdit, setIsCardEdit] = useState(false)

    const [input, setInput] = useState(true);

    const { TabPane } = Tabs

    const handleChangeSendMail = async () => {
        setInput(!input);
        const response:any = await handleApi(updateProfile(false, {isSendMail : !input}));
        if (response.success) {
        toast.success(response?.message);
        }
    }
    
    const handleGetAPI = async () => {
        try {
            // changeMode(true)
            const response:any = await getAll()
            setListSetting(response?.data?.data)
            const profileUser:any = await handleApi(getProfile(false))
            if (profileUser.success) {
              setDataProfile(profileUser?.metadata)
              setImageUrl(profileUser.metadata?.avatar)
              setInput(profileUser?.metadata?.isSendMail)
              handleGetListCard()
              handleGetListAccompanyingPerson()
            }
            // changeMode(false)
          } catch (error) {
            console.log('handleGetAPI error', error);
          }
    }

    const handleGetListCard = async () => {
      const response:any = await handleApi(getAllCard());
      if (response.success) {
          setListCard(response?.metadata)
      }
    }

    const handleGetListAccompanyingPerson = async () => {
      const response:any = await handleApi(getAllAccompanyingPerson());
      if (response.success) {
          setListAccompanyingPerson(response?.metadata)
      }
    }

    const handleRefreshPassword = async () => {
      const response:any = await handleApi(resetPassword(false, {email : dataProfile?.email}));
      if (response.success) {
      toast.success(response?.message);
      }
    }

    const handleCreateCard = async (values:any) => {
        const response:any = await handleApi(createCard(false, values));
        if (response.success) {
          setIsCardEdit(false)
          // toast.success(response?.message);
          handleGetListCard()
        }
    }

    const handleCreateAccompanyingPerson = async (values:any) => {
      const response:any = await handleApi(createAccompanyingPerson(false, {
        name : values.nameAccompanyingPerson,
        birthday : values.birthdayAccompanyingPerson,
        gender : values.genderAccompanyingPerson
      }));
      if (response.success) {
        setIsAccompanyingPersonEdit(false)
        // toast.success(response?.message);
        handleGetListAccompanyingPerson()
      }
  }


    const handleDeleteCard:  PopconfirmProps['onConfirm'] = async (cardId) => {
        const response:any = await handleApi(deleteCard(false, {cardId : cardId}));
        if (response.success) {
             await handleGetListCard()
        }
    }


    const handleDeleteAccompanyingPerson:  PopconfirmProps['onConfirm'] = async (accompanyingPersonId) => {
        const response:any = await handleApi(deleteAccompanyingPerson(false, {accompanyingPersonId : accompanyingPersonId}));
        if (response.success) {
             await handleGetListAccompanyingPerson()
        }
    }


    const handleDeleteUser:  PopconfirmProps['onConfirm'] = async () => {
      const response:any = await handleApi((deleteProfile()));
      if (response.success) {
           toast.success(response?.message);
      }
  
      setTimeout(() => {
          changeMode(false);
          window.location.href = "/";
      }, 5000);
  }


    const handleRender = (id:any) => {
        switch(id){
            case 1:
                return (
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
                        style={{ maxWidth: 600 }}
                        scrollToFirstError
                     >
                                 <Form.Item
                                    name="avatar"
                                    className='ml-[50%]'
    > 
                                    {
                                      imageUrl && (
                                          <Upload
                                              listType="picture-circle"
                                              className="avatar-uploader ml-[50%]]"
                                              showUploadList={false}
                                              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                              beforeUpload={beforeUpload}
                                              onChange={handleChange}
                                            >
                                              {imageUrl ? <img className = "rounded-full w-[100px] h-[100px]" src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                        </Upload>
                                      )
                                    }  
                                 </Form.Item>

                                <Form.Item
                                  name="name"
                                  label="Tên"
                                  tooltip="What do you want others to call you?"
                                  rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                                  >
                                    {
                                      dataProfile
                                      ?.name && (
                                        <Input defaultValue= {dataProfile?.name} />
                                      )
                                    }
                                 
                                </Form.Item>

                                <Form.Item
                                  name="nickname"
                                  label="Tên hiển thị"
                                  tooltip="What do you want others to call you?"
                                  // rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                                  >
                                    {
                                        dataProfile
                                        ?.nickName ? (
                                          <Input defaultValue= {dataProfile?.nickName} />)
                                          : (
                                            <Input value = "kkk" placeholder='Bạn chưa cập nhật tên hiển thị' />)
                                        
                                    }
                                </Form.Item>

                                <Form.Item
                                name="email"
                                label="Địa chỉ email"
                                rules={[
                                    {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                    },
                                    {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                    },
                                ]}
                                >
                                     {
                                          dataProfile
                                          ?.email ? (
                                            <Input defaultValue= {dataProfile?.email} />)
                                            : (
                                              <Input placeholder='Bạn chưa cập nhật email' />)
                                          
                                      }
                                </Form.Item>
              
                                {/* <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                                >
                                <Input.Password />
                                </Form.Item> */}
              
                                {/* <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The new password that you entered do not match!'));
                                    },
                                    }),
                                ]}
                                >
                                <Input.Password />
                                </Form.Item> */}
                        
                                <Form.Item
                                name="phone"
                                label="Số điện thoại"
                                // rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                   {
                                          dataProfile
                                          ?.phoneNumber ? (
                                            <Input addonBefore={prefixSelector} defaultValue= {dataProfile?.phoneNumber} />)
                                            : (
                                              <Input addonBefore={prefixSelector} placeholder='Bạn chưa cập nhật số điện thoại' style={{ width: '100%' }} />)
                                          
                                   }
                                </Form.Item>

                                
                                <Form.Item
                                name="birthday"
                                label="Ngày sinh"
                                // rules={[{ required: true, message: 'Please input your birthday!' }]}
                                >
                                 {
                                          dataProfile
                                          ?.dateOfBirth ? (
                                            <DatePicker defaultValue = { dataProfile
                                              ?.dateOfBirth} onChange={onChange} style={{ width: '100%' }}/>)
                                            : (
                                              <DatePicker placeholder='Bạn chưa cập nhật ngày sinh' onChange={onChange} style={{ width: '100%' }}/>)
                                          
                                   }
                                </Form.Item>
                        
                                <Form.Item
                                name="region"
                                label="Quốc tịch"
                                // rules={[{ required: true, message: 'Please input region!' }]}
                                >
                                <Select
                                    defaultValue= {dataProfile?.region ? dataProfile?.region : 'vn'}
                                    style={{ width: '100%' }}
                                    // onChange={handleChange}
                                    // options={[
                                    //   { value: 'jack', label: 'Jack' },
                                    //   { value: 'lucy', label: 'Lucy' },
                                    //   { value: 'Yiminghe', label: 'yiminghe' },
                                    // ]}
                                 >
                                      <Option value="vn">VN</Option>
                                      <Option value="korea">KOREA</Option>
                                      <Option value="japan">JAPAN</Option>

                                 </Select>
                        
                                </Form.Item>
                    
                                <Form.Item
                                name="gender"
                                label="Giới tính"
                                // rules={[{ required: true, message: 'Please select gender!' }]}
                                >
                                <Select defaultValue= {dataProfile?.sex ? dataProfile?.sex : '0'} placeholder="select your gender">
                                    <Option value="0">Male</Option>
                                    <Option value="1">Female</Option>
                                    <Option value="2">Other</Option>
                                </Select>
                                </Form.Item>

                                <Form.Item
                                name="address"
                                label="Địa chỉ"
                                // rules={[{ required: true, message: 'Please select address!' }]}
                                >
                                
                                    <Select defaultValue= {dataProfile?.address ? dataProfile?.address : 'vn'} style={{ width: '100%' }} placeholder="Vùng/quốc gia">
                                        <Option value="vn">VN</Option>
                                        <Option value="china">CHINA</Option>
                                        <Option value="korea">KOREAr</Option>
                                    </Select>
                                   
                                    {/* <Input className='my-3' placeholder='Tên đường và số nhà/ căn hộ' /> */}
                                    {/* <div className= "flex items-center gap-3" >
                                      <Input style={{ width: '50%' }} 
                                      placeholder='Thị trấn/thành phố' />
                                      <Input style={{ width: '50%' }} 
                                      placeholder='Mã bưu điện' />
                                    </div> */}

                                  
                                
                                </Form.Item>
                        
                               
                                <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Register
                                </Button>
                                </Form.Item>
                     </Form>

                  // <div className = "border-t border-slate-300" >
                  //      <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                  //       <div className = "flex items-center gap-10 w-[60%] " >
                  //           <div className='w-[40%]' >
                  //               <p className = "text-16 " >Tiền tệ</p>
                  //           </div>

                  //           <div className = "w-[60%]">
                  //               <p>VND</p>
                  //           </div>
                  //       </div>
                  //       <span className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >Chỉnh sửa</span>
                  //      </div>

                  //      <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                  //       <div className = "flex items-center gap-10 w-[60%] " >
                  //           <div className='w-[40%]' >
                  //               <p className = "text-16 " >Ngôn ngữ</p>
                  //           </div>

                  //           <div className = "w-[60%]">
                  //               <p>Tiếng Việt</p>
                  //           </div>
                  //       </div>
                  //       <span className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >Chỉnh sửa</span>
                  //      </div>

                  //      <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                  //       <div className = "flex items-center gap-10 w-[60%] " >
                  //           <div className='w-[40%]' >
                  //               <p className = "text-16 " >Tiền tệ</p>
                  //           </div>

                  //           <div className = "w-[60%]">
                  //               <p>VND</p>
                  //           </div>
                  //       </div>
                  //       <span className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >Chỉnh sửa</span>
                  //      </div>

                  //      <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                  //       <div className = "flex items-center gap-10 w-[60%] " >
                  //           <div className='w-[40%]' >
                  //               <p className = "text-16 " >Ngôn ngữ</p>
                  //           </div>

                  //           <div className = "w-[60%]">
                  //               <p>Tiếng Việt</p>
                  //           </div>
                  //       </div>
                  //       <span className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >Chỉnh sửa</span>
                  //      </div>

                  //      <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                  //       <div className = "flex items-center gap-10 w-[60%] " >
                  //           <div className='w-[40%]' >
                  //               <p className = "text-16 " >Tiền tệ</p>
                  //           </div>

                  //           <div className = "w-[60%]">
                  //               <p>VND</p>
                  //           </div>
                  //       </div>
                  //       <span className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >Chỉnh sửa</span>
                  //      </div>

                  //      <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                  //       <div className = "flex items-center gap-10 w-[60%] " >
                  //           <div className='w-[40%]' >
                  //               <p className = "text-16 " >Ngôn ngữ</p>
                  //           </div>

                  //           <div className = "w-[60%]">
                  //               <p>Tiếng Việt</p>
                  //           </div>
                  //       </div>
                  //       <span className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >Chỉnh sửa</span>
                  //      </div>

                  //      <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                  //       <div className = "flex items-center gap-10 w-[60%] " >
                  //           <div className='w-[40%]' >
                  //               <p className = "text-16 " >Tiền tệ</p>
                  //           </div>

                  //           <div className = "w-[60%]">
                  //               <p>VND</p>
                  //           </div>
                  //       </div>
                  //       <span className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >Chỉnh sửa</span>
                  //      </div>

                  //      <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                  //       <div className = "flex items-center gap-10 w-[60%] " >
                  //           <div className='w-[40%]' >
                  //               <p className = "text-16 " >Ngôn ngữ</p>
                  //           </div>

                  //           <div className = "w-[60%]">
                  //               <p>Tiếng Việt</p>
                  //           </div>
                  //       </div>
                  //       <span className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >Chỉnh sửa</span>
                  //      </div>

                  //      <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                  //       <div className = "flex items-center gap-10 w-[60%] " >
                  //           <div className='w-[40%]' >
                  //               <p className = "text-16 " >Ngôn ngữ</p>
                  //           </div>

                  //           <div className = "w-[60%]">
                  //               <p>Tiếng Việt</p>
                  //           </div>
                  //       </div>
                  //       <span className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >Chỉnh sửa</span>
                  //      </div>
                  //   </div>
            )

            case 2:
                return (
                    <div className = "border-t border-slate-300" >
                       <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                        <div className = "flex items-center gap-10 w-[60%] " >
                            <div className='w-[40%]' >
                                <p className = "text-16 " >Tiền tệ</p>
                            </div>

                            {
                              isMoneyEdit ? (
                                <select onChange={(e) => Cookies.set("money", e.target.value)} >
                                    <option value= "VND" >VND</option>
                                    <option value= "USD">USD</option>
                                 </select>
                                
                              ) : (
                                <div className = "w-[60%]">
                                    <p>{Cookies.get("money") ? Cookies.get("money") : "VND"}</p>
                                </div>
                              )
                            }
                           
                        </div>
                        <span onClick = {() => setIsMoneyEdit(!isMoneyEdit)} className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >{isMoneyEdit ? "Lưu" : "Chỉnh Sửa"}</span>
                       </div>

                       <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                        <div className = "flex items-center gap-10 w-[60%] " >
                            <div className='w-[40%]' >
                                <p className = "text-16 " >Ngôn ngữ</p>
                            </div>

                           

                            {
                              isLanguageEdit ? (
                                <select onChange={(e) => Cookies.set("language", e.target.value)}   >
                                    <option value = "Tiếng Việt" >Tiếng Việt</option>
                                    <option value = "Tiếng Anh">Tiếng Anh</option>
                                 </select>
                                
                              ) : (
                                <div className = "w-[60%]">
                                   <p>{Cookies.get("language") ? Cookies.get("language") : "Tiếng Việt"}</p>
                                </div>
                              )
                            }
                        </div>
                        <span onClick = {() => setIsLanguageEdit(!isLanguageEdit)} className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >{isLanguageEdit ? "Lưu" : "Chỉnh Sửa"}</span>
                       </div>
                    </div>
            )
            
            case 3:
                    return (
                      
                        <div className = "" >
                            {
                                listCard && (
                                  <div className='overflow-y-scroll max-h-72' >

                                    {
                                      listCard.map((item:any , index) => (
                                        <div key = {index} className = "flex items-center justify-between border-b  border-slate-300 p-5 " >
                                        <div className = "flex items-center gap-10 w-[60%] " >
                                            <div className='w-[30%]' >
                                                <p className = "text-16 " >Thẻ thanh toán</p>
                                            </div>
                
                                            
                                            <div className = "w-[30%]">
                                                    <p>{item?.number}</p>
                                            </div>
                                              
                                            <div className = "w-[30%]">
                                                    <p>{formatDate(item?.expireDay)}</p>
                                            </div>
                                           
                                        </div>
                                        <ConfirmPopUp data = {{
                                          title : "Xóa phương thức thanh toán",
                                          description : "Bạn có chắc muốn xóa phương thức thanh toán này?",
                                          function : () => handleDeleteCard(item?.cardId)
                                    }}/>
                                       </div>
                                      ))
                                    }
                                  </div>
                                )
                            }
                            {
                                isCardEdit && (
                              <Form
                                  {...formItemLayout}
                                  form={formCard}
                                  name="card"
                                  onFinish={handleCreateCard}
                                  initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
                                  style={{ maxWidth: 600 }}
                                  scrollToFirstError
                                  className = "mt-5"
                              >
                                        
                                          <Form.Item
                                            name="nameOwner"
                                            label="Tên chủ thẻ"
                                            tooltip="What do you want others to call you?"
                                            rules={[{ required: true, message: 'Please input your name owner!', whitespace: true }]}
                                            >
                                                <Input />
                                          </Form.Item>
                                          
                                          <Form.Item
                                          name="number"
                                          label="Số thẻ"
                                          rules={[
                                            {
                                              required: true,
                                              message: 'Vui lòng nhập số thẻ tín dụng!',
                                            },
                                            {
                                              validator: (_, value) => {
                                                if (!value || validateCreditCard(value)) {
                                                  return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('Số thẻ tín dụng không hợp lệ!'));
                                              },
                                            },
                                          ]}
                                          >   
                                               <Input type = "number"/>
                                          </Form.Item>
                                  
                                      
                                          <Form.Item
                                          name="expireDay"
                                          label="Ngày hết hạn"
                                          // rules={[{ required: true, message: 'Please select gender!' }]}
                                          >
                                           <DatePicker  onChange={onChange} style={{ width: '100%' }}/>
                                          </Form.Item>
          
                                          
                                          <Form.Item {...tailFormItemLayout}>
                                            <Button type="primary" htmlType="submit">
                                                Lưu
                                            </Button>
                                          </Form.Item>
                              </Form>
          
                                )
                            }
                         
                            <div className = "flex items-center mt-3 justify-end gap-5" >
                            {
                              isCardEdit && (
                                <div onClick = {() => setIsCardEdit(false)} className='w-[20%]' >
                                  <ButtonBlue>
                                    <p>Hủy</p>
                                </ButtonBlue>
                                </div>
                              )
                            }

    {
                              !isCardEdit && (
                                <div onClick = {() => setIsCardEdit(true)} className='w-[28%]' >
                                  <ButtonBlue>
                                    <p>+ Thêm phương thức thanh toán</p>
                                </ButtonBlue>
                                </div>
                              )
                            }
                            </div>
                        </div>
            )

            case 4:
                    return (
                        <div className = "border-t border-slate-300" >
                            <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                                <div className = "flex items-center gap-10 w-[60%] " >
                                    <div className='w-[40%]' >
                                         <p className = "text-16 " >Mật khẩu</p>
                                    </div>

                                    <div className = "w-[60%]">
                                         <p>Để thay đổi mật khẩu, chúng tôi cần gửi link tạo lại mật khẩu đến địa chỉ email của bạn</p>
                                    </div>
                                </div>
                                <span onClick = {() => handleRefreshPassword()} className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >Gửi Mail</span>
                            </div>

                            <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                                <div className = "flex items-center gap-10  w-[60%]" >

                                    <div className='w-[40%]' >
                                         <p className = "text-16 " >Các phiên truy cập đang có hiệu lực</p>
                                    </div>

                                    <div className = "w-[60%]" >
                                         <p>Khi chọn "Đăng xuất", bạn sẽ đăng xuất khỏi tất cả các thiết bị trừ thiết bị này và có thể mất đến 10 phút.</p>
                                    </div>
                                </div>
                                <span className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >Đăng xuất</span>
                            </div>

                            <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                                <div className = "flex items-center gap-10  w-[60%]" >


                                    <div className='w-[40%]' >
                                         <p className = "text-16 " >Xóa tài khoản</p>
                                    </div>

                                    <div className = "w-[60%]" >
                                         <p>Xóa tài khoản vĩnh viễn</p>
                                    </div>
                                </div>
                                    <ConfirmPopUp data = {{
                                       title : "Xóa tài khoản",
                                       description : "Bạn có chắc muốn xóa tài khoản này ?",
                                       function : handleDeleteUser
                                    }}/>
                            </div>
                        </div>
            )

            case 5:
                return (
                    <div className = "border-t border-slate-300" >
                        <div className = "flex items-center justify-between border-b  border-slate-300 p-5" >
                            <div className = "flex items-center gap-10 w-[60%] " >
                                <div className='w-[40%]' >
                                    <p className = "text-16 " >Tùy chọn email</p>
                                </div>

                                <div className = "w-[60%]">
                                    <p>nguyenminhtri.vnpt2@gmail.com <br></br>
                                    <p>Đây là địa chỉ email bạn dùng để đăng nhập. Chúng tôi cũng sẽ gửi các xác nhận đặt chỗ tới địa chỉ này.</p>
                                    </p>
                                </div>
                            </div>
                             {/* <span className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >Chỉnh sửa</span> */}
                             <Switch
                                checked={!input}
                                className='bg-red-600'
                                checkedChildren="Bật thông báo"
                                unCheckedChildren="Tắt thông báo"
                                onChange={() => {
                                  handleChangeSendMail();
                                }}
                              />
                      </div>
                    </div>  
            )

            case 6:
                return (
                    <div className = "" >

{
                                listAccompanyingPerson && (
                                  <div className='overflow-y-scroll max-h-72' >

                                    {
                                      listAccompanyingPerson.map((item:any , index) => (
                                        <div key = {index} className = "flex items-center justify-between border-b  border-slate-300 p-5 " >
                                        <div className = "flex items-center gap-10 w-[60%] " >
                                            <div className='w-[30%]' >
                                                <p className = "text-16 " >Người đi cùng</p>
                                            </div>
                
                                            
                                            <div className = "w-[30%]">
                                                    <p>{item?.name}</p>
                                            </div>
                                              
                                            <div className = "w-[30%]">
                                                    <p>{formatDate(item?.birthday)}</p>
                                            </div>
                                           
                                        </div>
                                        <ConfirmPopUp data = {{
                                          title : "Xóa người đi cùng",
                                          description : "Bạn có chắc muốn xóa người đi cùng này?",
                                          function : () => handleDeleteAccompanyingPerson(item?.accompanyingPersonId)
                                    }}/>
                                       </div>
                                      ))
                                    }
                                  </div>
                                )
                            }

                      {
                         isAccompanyingPersonEdit && (
                          <Form
                          {...formItemLayout}
                          form={formAccompanyingPerson}
                          name="AccompanyingPerson"
                          onFinish={handleCreateAccompanyingPerson}
                          initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
                          style={{ maxWidth: 600 }}
                          scrollToFirstError
                          className = "mt-5"
                       >
                                
                                  <Form.Item
                                    name="nameAccompanyingPerson"
                                    label="Tên"
                                    tooltip="What do you want others to call you?"
                                    rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                                    >
                                        <Input />
                                  </Form.Item>
                                  
                                  <Form.Item
                                  name="birthdayAccompanyingPerson"
                                  label="Ngày sinh"
                                  >   
                                              <DatePicker  onChange={onChange} style={{ width: '100%' }}/>
                                  </Form.Item>
                          
                              
                                  <Form.Item
                                  name="genderAccompanyingPerson"
                                  label="Giới tính"
                                  // rules={[{ required: true, message: 'Please select gender!' }]}
                                  >
                                  <Select placeholder="select your gender">
                                      <Option value="0">Male</Option>
                                      <Option value="1">Female</Option>
                                      <Option value="2">Other</Option>
                                  </Select>
                                  </Form.Item>
  
                                  
                                  <Form.Item {...tailFormItemLayout}>
                                  <Button type="primary" htmlType="submit">
                                      Lưu
                                  </Button>
                                  </Form.Item>
                       </Form>
  
                         )
                      }

                      <div className = "flex items-center justify-end gap-5 mt-5" >
                        {
                          isAccompanyingPersonEdit && (
                            <div onClick = {() => setIsAccompanyingPersonEdit(false)} className='w-[20%]' >
                              <ButtonBlue>
                                <p>Hủy</p>
                             </ButtonBlue>
                             </div>
                          )
                        }

{
                          !isAccompanyingPersonEdit && (
                            <div onClick = {() => setIsAccompanyingPersonEdit(true)} className='w-[20%]' >
                              <ButtonBlue>
                                <p>+ Thêm người đi cùng</p>
                             </ButtonBlue>
                             </div>
                          )
                        }
                      </div>
                    </div>
            )
        }
    }
         
    useEffect(() => {
        handleGetAPI();
    }, []);

    

    return (
        <Section>
          {
            dataProfile && (
              <SectionBody>
                  <Tabs defaultActiveKey= {index + ""} tabPosition={'left'}>
                      {
                          listSetting?.map((item:any, i) => {
                              return (
                                  <TabPane tab={
                                  <div className = "flex items-center gap-2" >
                                    <div className='MySettingsCardItem__left bg-slate-100 rounded-full p-2' >
                                      <Image
                                          src= {`${process.env.NEXT_PUBLIC_API_STRAPI_HOST}${item?.attributes?.Icon?.data?.attributes?.url}`}
                                          alt="Picture of the author"
                                          width="25"
                                          height="25"
                                          className="object-contain  rounded-full "
                                      />
                                  </div> 
                                  <p>{item?.attributes?.Title}</p>

                                </div>
                              } key={item?.id}>
                                      <div>
                                          <p className = "text-3xl font-bold" >{item?.attributes?.Title}</p>
                                          <p className = "text-16 text-slate-700 mt-3">{item?.attributes?.Description}</p>
                                      </div>
                                      <div className = "mt-10" >
                                          {handleRender(item?.id)}
                                      </div>
                                  </TabPane>
                              )
                          })
                      }
                  </Tabs>

                
              </SectionBody>
            )
          }

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
            
        </Section>
    )
}

export default Personal