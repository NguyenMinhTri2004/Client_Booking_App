
import Section from "@/common/components/Section"
import Image from "next/image"
import { ButtonBlue } from "@/common/components/Button";

const Genius = () => {
  return (
        <Section>
            <div className="flex items-center justify-center mx-auto w-[90%] border rounded-md" >
                <div className="flex items-center gap-3 p-3" >
                    <Image
                            src="/images/GlobeGeniusBadge.png"
                            alt="Picture of the author"
                            width="150"
                            height="50"
                            className="object-contain"
                    />

                    <div>
                        <p className="font-bold text-2xl" >Nhận giảm giá tức thì</p>   
                        <div className="w-[60%] my-2" >Chỉ cần đăng nhập tài khoản Booking.com của bạn và 
                            tìm logo Genius màu xanh dương để tiết kiệm
                        </div>                

                        <div className="flex items-center gap-2" >
                            <ButtonBlue className='' >Đăng nhập</ButtonBlue>
                            <ButtonBlue className=''  >Đăng ký</ButtonBlue>
                        </div> 
                    </div>
                </div>
            </div>
           
        </Section>
  );
};

export default Genius;