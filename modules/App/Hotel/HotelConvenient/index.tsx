
import Section from "@/common/components/Section"
import SectionTitle from "@/common/components/Section/SectionTitle";
import SectionBody from '@/common/components/Section/SectionBody';
import Image from "next/image";
import { ButtonBlue } from "@/common/components/Button";

const HotelConvenient= (props : any) => {

    return (
        <Section>
             <SectionTitle>
                <p>Các tiện nghi của Muong Thanh My Khe Beach Apartment Da Nang</p>
                <div>
                    < ButtonBlue>Xem phòng trống</ButtonBlue>
                </div>
             </SectionTitle>
        
             <SectionBody>
                <p>Các tiện nghi được ưa chuộng nhất</p>     
                <div className="flex items-center gap-3" >
                    <div className="flex items-center gap-3" >
                           1
                           WiFi miễn phí
                    </div>

                    <div className="flex items-center gap-3" >
                           1
                           WiFi miễn phí
                    </div>

                    <div className="flex items-center gap-3" >
                           1
                           WiFi miễn phí
                    </div>
                </div>
             </SectionBody>
        </Section>
    )
}

export default HotelConvenient
