
import Section from "@/common/components/Section"
import SectionTitle from "@/common/components/Section/SectionTitle";
import SectionBody from '@/common/components/Section/SectionBody';
import Image from "next/image";
import { ButtonBlue } from "@/common/components/Button";

const HotelGeneralRule = (props : any) => {

    return (
        <Section>
             <SectionTitle>
                <p>Quy tắc chung</p>
                <div>
                     <ButtonBlue>Xem phòng trống</ButtonBlue>
                </div> 
             </SectionTitle>
        
             <SectionBody>
                  <div className="border p-5" >
                        <div className="flex items-start gap-10" >
                            <div className="flex items-center gap-3 mr-5" >
                                    <p>ii</p>
                                    <p>Hủy đặt phòng/Trả trước</p>
                            </div>

                            <div>
                                 Các loại căn hộ khác nhau có thể có chính sách hủy đặt phòng 
                                 và chính sách thanh toán trước không giống nhau. Xin vui lòng
                                  kiểm tra điều kiện căn hộ khi lựa chọn căn hộ của bạn ở phía trên.
                            </div>
                        </div>
                  </div>
             </SectionBody>
        </Section>
    )
}

export default HotelGeneralRule
