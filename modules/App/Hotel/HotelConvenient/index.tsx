
import Section from "@/common/components/Section"
import SectionTitle from "@/common/components/Section/SectionTitle";
import SectionBody from '@/common/components/Section/SectionBody';
import Image from "next/image";
import { ButtonBlue } from "@/common/components/Button";
import HotelServiceItem from "../HotelServiceItem";

const HotelConvenient= ({data} : any) => {

    return (
        <Section>
             <SectionTitle>
                <p>Các tiện nghi gần bên</p>
             </SectionTitle>
        
             <SectionBody>
                {
                            data?.convenientsNear &&  Object.keys(data?.convenientsNear).map((item: string, index: number) => (
                                    <div key={index} className="">
                                        <h1 className="font-bold text-sm my-5" >{item.toUpperCase()}</h1>             

                                        {
                                            Object.keys(data?.convenientsNear[item]).length > 1 ? <div className="flex items-center gap-2" >
                                                {
                                                    Object.keys(data?.convenientsNear[item]).map((child: string, index: number) => (
                                                        // <span key={index} className="mx-5 border border-slate-400 rounded-sm p-3 cursor-pointer">
                                                        //     <p className="font-bold" >{child}</p>
                                                        //     <p className="text-sm" >
                                                        //         ( 
                                                        //             {data.convenientsNear[item][child]}
                                                        //         )
                                                        //     </p>
                                                            
                                                        // </span>

                                                        <HotelServiceItem title = {child} detail =  {data.convenientsNear[item][child]} />
                                                    ))
                                                }
                                            </div> 
                                            :  <span key={index} className="mx-5 border border-slate-400 rounded-sm p-3 cursor-pointer">
                                                    {data?.convenientsNear[item]}
                                            </span>
                                        }
                                     </div>
                            ))
                 }
             </SectionBody>
        </Section>
    )
}

export default HotelConvenient
