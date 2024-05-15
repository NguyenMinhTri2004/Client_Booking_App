
import MyTripsCardItem from './MyTripsCardItem';
import SectionTitle from '@/common/components/Section/SectionTitle';
import SectionSubtitle from '@/common/components/Section/SectionSubTitle';
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';


const MyTripsCardItemList = (props : any) => {
    return (
        <Section>
            <SectionTitle>
                <p>Vũng Tàu</p>
            </SectionTitle>
            <SectionSubtitle>
               27 tháng 3 – 28 tháng 3
            </SectionSubtitle>
            <SectionBody>
                <MyTripsCardItem/>
                <MyTripsCardItem/>
                <MyTripsCardItem/>
                <MyTripsCardItem/>
                <MyTripsCardItem/>
            </SectionBody>
        </Section>
    )
}

export default MyTripsCardItemList