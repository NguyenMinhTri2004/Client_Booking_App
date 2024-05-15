
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';
import Hotel from "@/modules/App/Hotel";
import Image from 'next/image';

const HotelPage = (props : any) => {

    return (
            <div className="mt-[140px]" >
                <Hotel/>    
            </div>
                
          
    )
}

export default HotelPage
