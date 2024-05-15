
import MyTripsCardItemList from './MyTripsCardItemList';
import SectionTitle from '@/common/components/Section/SectionTitle';
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';


const MyTrips = (props : any) => {
    return (
        <Section>
            <SectionTitle>
                <p>Đặt chỗ & Chuyến đi</p>
                {/* <p>Ban ko tim thay dat phong</p> */}
            </SectionTitle>
            <SectionBody>
                <MyTripsCardItemList/>
            </SectionBody>
        </Section>
    )
}

export default MyTrips
