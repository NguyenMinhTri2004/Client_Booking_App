
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';
import HotelOverview from "./HotelOverview";
import HotelInformation_And_Prices from "./HotelInformation_And_Prices";
import HotelRate from "./HotelRate";
import HotelConvenient from "./HotelConvenient";
import HotelGeneralRule from "./HotelGeneralRule";
import HotelSimilar from "./HotelSimilar";
import { useEffect, useState } from "react";
import { getAccommodationBySlug } from "@/common/api/accommodation";
import { getallRoomTypeBySlug } from "@/common/api/roomType";
import { useRouter } from "next/router";
import { handleApi } from "@/common/utils";

const Hotel = (props : any) => {
    
    const router = useRouter()
   
    const slug = router?.query?.slug

    const [detailAccommodation, setDetailAccommodation] = useState<any>(null)

    const [roomTypeList, setRoomTypeList] = useState<any>(null)

    useEffect(() => {
        getAccommodationBySlug(false, slug + "")
            .then(({ data }) => {
                setDetailAccommodation(data.metadata)
            })
            .catch((error) => {
                console.error("Error fetching accommodation", error);
            })
        
        getallRoomTypeBySlug(false, slug + "")
            .then(({ data }) => {
                setRoomTypeList(data.metadata)
            })
            .catch((error) => {
                console.error("Error fetching accommodation", error);
            })
    }, [slug]);

    return (
        <div className="flex flex-col gap-5" >
                <HotelOverview data = {detailAccommodation}/>
                <HotelInformation_And_Prices nameAccommodation = {detailAccommodation?.name} roomTypeList = {roomTypeList} slugAccommodation = {slug} />
                <HotelRate/>
                <HotelConvenient data = {detailAccommodation}/>
                <HotelGeneralRule data = {detailAccommodation}/>
                <HotelSimilar/>
        </div>
    )
}

export default Hotel
