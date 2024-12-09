
import Section from "@/common/components/Section"
import SectionTitle from "@/common/components/Section/SectionTitle";
import SectionBody from '@/common/components/Section/SectionBody';
import Image from "next/image";
import { ButtonBlue } from "@/common/components/Button";

const HotelGeneralRule = ({data} : any) => {

    return (
        <Section>
             <SectionTitle>
                <p>Quy tắc chung</p>
                {/* <div>
                     <ButtonBlue>Xem phòng trống</ButtonBlue>
                </div>  */}
             </SectionTitle>
        
             <SectionBody>
                  <div className="border p-5" >
                        {
                          data?.generalRules?.map((item : any, index : number) => (
                            <div className="flex items-start gap-10 border-b p-5" >
                                <div className="flex items-center gap-3 mr-5 font-bold w-[30%]" >
                                        <p>{index + 1}</p>
                                        <p>{item?.title}</p>
                                </div>

                                <div className="w-full" >
                                  <p className="w-[70%] text-wrap text-sm text-slate-700" > {item?.description}
                                  </p>
                                    
                                </div>
                            </div>

                          ))
                        }      
                  </div>
             </SectionBody>
        </Section>
    )
}

export default HotelGeneralRule
