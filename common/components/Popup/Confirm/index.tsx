import type { PopconfirmProps } from 'antd/lib';
import { Button, message, Popconfirm } from 'antd/lib';
import {deleteProfile} from '@/common/api/user';
import { handleApi } from "@/common/utils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthStore } from '@/zustand/auth/store';


const ConfirmPopUp = ({data} : any) => {
    const changeMode = useAuthStore(state => state.changeMode)

    const confirm: PopconfirmProps['onConfirm'] = async (e) => {
        console.log(e);
        const response:any = await handleApi(deleteProfile());
        if (response.success) {
             toast.success(response?.message);
        }
    
        setTimeout(() => {
            changeMode(false);
            window.location.href = "/";
        }, 5000);
    };
      
      const cancel: PopconfirmProps['onCancel'] = (e) => {
      };
    return (
        <Popconfirm
            title= {data?.title}
            description= {data?.description}
            onConfirm={data?.function}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
        >
                <span className = "text-blue-700 cursor-pointer font-bold hover:bg-blue-500/10 p-2" >{data?.title}</span>
        </Popconfirm>
    )
}

export default ConfirmPopUp