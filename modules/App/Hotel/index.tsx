
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';
import HotelOverview from "./HotelOverview";
import HotelInformation_And_Prices from "./HotelInformation_And_Prices";
import HotelRate from "./HotelRate";
import HotelConvenient from "./HotelConvenient";
import HotelGeneralRule from "./HotelGeneralRule";
import HotelSimilar from "./HotelSimilar";

const Hotel = (props : any) => {

    return (
        <div className="flex flex-col gap-5" >
                <HotelOverview/>
                <HotelInformation_And_Prices/>
                <HotelRate/>
                <HotelConvenient/>
                <HotelGeneralRule/>
                <HotelSimilar/>
        </div>
    )
}

export default Hotel
