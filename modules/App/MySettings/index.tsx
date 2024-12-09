
import MySettingsCardItemList from './MySettingsCardItemList';
import SectionTitle from '@/common/components/Section/SectionTitle';
import SectionSubtitle from '@/common/components/Section/SectionSubTitle';
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { getAll } from '@/common/api/Strapi/setting';
import { useAuthStore } from '@/zustand/auth/store';

const MySettings = (props : any) => {

    const [listSetting, setListSetting] = useState([])
    
    const handleGetAPI = async () => {
        try {
            // changeMode(true)
            const response:any = await getAll()
            console.log("response", response?.data?.data)
            setListSetting(response?.data?.data)
            // changeMode(false)
          } catch (error) {
            console.log('handleGetAPI error', error);
          }
    }
         
    useEffect(() => {
        handleGetAPI();
      }, []);

    return (
        <Section className='MySettings' >
            <SectionTitle>
                <p className = "text-3xl font-bold" >Cài đặt tài khoản</p>
            </SectionTitle>
            <SectionSubtitle>
                Quản lý trải nghiệm Booking.com của bạn
            </SectionSubtitle>
            <SectionBody>
                <MySettingsCardItemList data = {listSetting}/>
            </SectionBody>
        </Section>
    )
}

export default MySettings