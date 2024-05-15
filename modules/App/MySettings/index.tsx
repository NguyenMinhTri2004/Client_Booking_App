
import MySettingsCardItemList from './MySettingsCardItemList';
import SectionTitle from '@/common/components/Section/SectionTitle';
import SectionSubtitle from '@/common/components/Section/SectionSubTitle';
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';

const MySettings = (props : any) => {
    return (
        <Section className='MySettings' >
            <SectionTitle>
                <p>Cài đặt tài khoản</p>
            </SectionTitle>
            <SectionSubtitle>
                Quản lý trải nghiệm Booking.com của bạn
            </SectionSubtitle>
            <SectionBody>
                <MySettingsCardItemList/>
            </SectionBody>
        </Section>
    )
}

export default MySettings