
import Section from "@/common/components/Section"
import SectionTitle from "@/common/components/Section/SectionTitle";
import SectionBody from '@/common/components/Section/SectionBody';
import Image from "next/image";
import { ButtonBlue } from "@/common/components/Button";
const HotelSimilar = (props : any) => {

    return (
        <Section>
             <SectionTitle>
                <p>Khách từng xem Muong Thanh My Khe Beach Apartment Da Nang đã đặt các chỗ nghỉ này</p>
                <div>
                    <ButtonBlue>Hiển thị thêm</ButtonBlue>
                </div>
             </SectionTitle>
        
             <SectionBody>
                 
             </SectionBody>
        </Section>
    )
}

export default HotelSimilar
