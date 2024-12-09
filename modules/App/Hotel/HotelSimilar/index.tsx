
import Section from "@/common/components/Section"
import SectionTitle from "@/common/components/Section/SectionTitle";
import SectionBody from '@/common/components/Section/SectionBody';
import Image from "next/image";
import { ButtonBlue } from "@/common/components/Button";
const HotelSimilar = (props : any) => {

    return (
        <Section>
             <SectionTitle>
                <p>Chỗ nghỉ tương tự</p>
                {/* <div>
                    <ButtonBlue>Hiển thị thêm</ButtonBlue>
                </div> */}
             </SectionTitle>
        
             <SectionBody>
                 
             </SectionBody>
        </Section>
    )
}

export default HotelSimilar
