
import Section from "@/common/components/Section"
import MiniMap from '@/common/components/Map/MiniMap';
import { ButtonBlue } from "@/common/components/Button";
import { DatePicker, Space } from 'antd/lib';
import Image from "next/image";
import CheckboxComponent from "@/common/components/Checkbox";
import {HeartAdd , Share} from 'iconsax-react';
import { Location } from "iconsax-react";

const HotelOverview = (props : any) => {
    const { RangePicker } = DatePicker;

    return (
        <Section>
             <div>
                 <div className='HotelOverview flex items-start gap-3 w-full' >
                        <div className='HotelOverview__left flex flex-col px-3' >
                             <div className="bg-[#FEBB02] p-5" >
                                    <p className="font-bold text-18" >Tìm</p>
                                    <div className="flex flex-col mt-1 mb-2" >
                                        <label className="text-12" htmlFor="">Tên chỗ nghỉ / điểm đến:</label>
                                        <input type="text" />
                                    </div>

                                    <div className="flex flex-col mt-1 mb-2" >
                                        <label className="text-12" htmlFor="">Ngày nhận phòng</label>
                                        <Space direction="vertical" size={12}>
                                            <RangePicker />
                                        </Space>
                                    </div>

                                    <div className="flex flex-col mt-1 mb-2" >
                                        <label className="text-12" htmlFor="">Ngày trả phòng</label>
                                        <Space direction="vertical" size={12}>
                                            <RangePicker />
                                        </Space>
                                    </div>

                                    <div className="flex flex-col mt-1 mb-2" >
                                        <label className="text-12" htmlFor="">Nghỉ 1 đêm</label>
                                        <input type="text" />
                                    </div>

                                    <div className="flex items-center gap-3" >
                                        <CheckboxComponent>
                                             Nhà & căn hộ nguyên căn
                                        </CheckboxComponent>
                                    </div>

                                    <div className="flex items-center gap-3" >
                                        <CheckboxComponent>
                                             Tôi đi công tác
                                        </CheckboxComponent>
                                    </div>

                                    <div className="mt-3" >
                                         <ButtonBlue>Tìm</ButtonBlue>
                                    </div>
                                   
                                    
                             </div>

                            <div>
                               <MiniMap/>
                            </div>
                             
                        </div>

                        <div className='HotelOverview__right' >
                                <div className="HotelOverview__right__top flex items-center justify-between" >
                                       <div>
                                             <p>Bãi biển</p>
                                             <p className="font-bold text-2xl" >Muong Thanh My Khe Beach Apartment</p>
                                             <div className="flex items-center gap-1" >
                                                 <Location size="20" color="blue" variant="Bold"/>
                                                 <p className="text-14" >Trần Bạch Đằng, Đà Nẵng, Việt Nam </p>
                                             </div>
                                             
                                       </div>

                                       <div className="" >
                                            <div className="flex items-center justify-center gap-5" >
                                                <HeartAdd className="cursor-pointer" size="45" color="blue"/>
                                                <Share className="cursor-pointer" size="45" color="blue"/>
                                                <ButtonBlue>Đặt ngay</ButtonBlue>  
                                            </div>
                                            {/* <div>
                                                <p>Chúng tôi luôn khớp giá</p>
                                            </div> */}
                                       </div>
                                        
                                       
                                </div>

                                <div className="HotelOverview__right__bottom" >
                                     <div className="HotelOverview__right__bottom__bigImg flex items-center gap-3" >
                                        <div className="HotelOverview__right__bottom__bigImg__left flex flex-col ">
                                            <Image
                                                src="/images/BannerHome01.png"
                                                alt="Picture of the author"
                                                width="250"
                                                height="50"
                                                className="object-contain cursor-pointer"
                                            />
                                            <Image
                                                src="/images/BannerHome01.png"
                                                alt="Picture of the author"
                                                width="250"
                                                height="50"
                                                className="object-contain cursor-pointer"
                                            />
                                        </div>
                                         <div className="HotelOverview__right__bottom__bigImg__right">
                                            <Image
                                                src="/images/BannerHome01.png"
                                                alt="Picture of the author"
                                                width="600"
                                                height="100"
                                                className="object-contain cursor-pointer"
                                            />
                                        </div>
                                     </div>
                                        

                                        <div className="flex items-center gap-3" >
                                            <Image
                                                src="/images/BannerHome01.png"
                                                alt="Picture of the author"
                                                width="200"
                                                height="200"
                                                className="object-contain cursor-pointer"
                                            />
                                            <Image
                                                src="/images/BannerHome01.png"
                                                alt="Picture of the author"
                                                width="200"
                                                height="200"
                                                className="object-contain cursor-pointer"
                                            />
                                            <Image
                                                src="/images/BannerHome01.png"
                                                alt="Picture of the author"
                                                width="200"
                                                height="200"
                                                className="object-contain cursor-pointer"
                                            />
                                            <Image
                                                src="/images/BannerHome01.png"
                                                alt="Picture of the author"
                                                width="200"
                                                height="200"
                                                className="object-contain cursor-pointer"
                                            />
                                            <Image
                                                src="/images/BannerHome01.png"
                                                alt="Picture of the author"
                                                width="200"
                                                height="200"
                                                className="object-contain cursor-pointer"
                                            />
                                        </div>
                                </div>

                        </div>
                 </div>

                 <div className="flex items-center gap-5 flex-wrap" >
                      <div className="flex items-center gap-3 border py-3 px-7 cursor-pointer" >
                         <Image
                             src="/images/BannerHome01.png"
                             alt="Picture of the author"
                             width="80"
                             height="80"
                             className="object-contain cursor-pointer"
                         />

                         <p>Can ho</p>
                      </div>

                      <div className="flex items-center gap-3 border py-3 px-7 cursor-pointer" >
                         <Image
                             src="/images/BannerHome01.png"
                             alt="Picture of the author"
                             width="80"
                             height="80"
                             className="object-contain cursor-pointer"
                         />

                         <p>Can ho</p>
                      </div>



                      <div className="flex items-center gap-3 border py-3 px-7 cursor-pointer" >
                         <Image
                             src="/images/BannerHome01.png"
                             alt="Picture of the author"
                             width="80"
                             height="80"
                             className="object-contain cursor-pointer"
                         />

                         <p>Can ho</p>
                      </div>



                      <div className="flex items-center gap-3 border py-3 px-7 cursor-pointer" >
                         <Image
                             src="/images/BannerHome01.png"
                             alt="Picture of the author"
                             width="80"
                             height="80"
                             className="object-contain cursor-pointer"
                         />

                         <p>Can ho</p>
                      </div>



                      <div className="flex items-center gap-3 border py-3 px-7 cursor-pointer" >
                         <Image
                             src="/images/BannerHome01.png"
                             alt="Picture of the author"
                             width="80"
                             height="80"
                             className="object-contain cursor-pointer"
                         />

                         <p>Can ho</p>
                      </div>



                      <div className="flex items-center gap-3 border py-3 px-7 cursor-pointer" >
                         <Image
                             src="/images/BannerHome01.png"
                             alt="Picture of the author"
                             width="80"
                             height="80"
                             className="object-contain cursor-pointer"
                         />

                         <p>Can ho</p>
                      </div>



                      <div className="flex items-center gap-3 border py-3 px-7 cursor-pointer" >
                         <Image
                             src="/images/BannerHome01.png"
                             alt="Picture of the author"
                             width="80"
                             height="80"
                             className="object-contain cursor-pointer"
                         />

                         <p>Can ho</p>
                      </div>


                      
                     
                 </div>

                 <div className="mt-5 flex items-start gap-10" >
                    <div className="w-[70%]" >
                         <p className="font-bold text-18" >Trải nghiệm dịch vụ đẳng cấp thế giới ở Henderson Beach Resort</p>
                         <p className="text-14" >Nằm ngay cạnh công viên bang Henderson Beach State Park, Henderson Beach Resort có bãi biển riêng. Du khách có thể ngâm mình sảng khoái tại một trong 2 hồ bơi của resort hoặc thư giãn trong spa đầy đủ dịch vụ. Một số lựa chọn ăn uống được cung cấp trong khuôn viên đảm bảo du khách sẽ thích. Chỗ nghỉ cũng có không gian tổ chức hội họp và sự kiện rộng 2.787m2. WiFi miễn phí được cung cấp cho tất cả du khách. <br></br><br></br>

                            Phòng nghỉ tại đây có TV truyền hình cáp màn hình phẳng, máy pha cà phê và ban công nhìn ra hồ bơi, biển hoặc sân trong. Du khách có thể sử dụng quầy giải khát và minibar trong phòng. Một số phòng còn có ghế sofa.<br></br><br></br>

                            Du khách có thể rèn luyện sức khỏe tại trung tâm thể dục trong khuôn viên. Trung tâm dịch vụ doanh nhân là nơi hoàn hảo cho khách doanh nhân. Resort này cung cấp nhiều hoạt động như lướt ván đứng, đi xe đạp và chèo thuyền kayak.<br></br><br></br>

                            Với tầm nhìn ra resort, Primrose là nhà hàng đầy đủ dịch vụ phục vụ hải sản tươi ngon và bít tết. Nhà hàng Horizons cho tầm nhìn ra toàn cảnh Duyên hải Vịnh Mexico của Hoa Kỳ. Tại đây có quầy bar hình bát giác và phục vụ hải sản tươi sống cũng như một loạt món ăn khác trong thực đơn. Sea Level Pool Grill là lựa chọn ăn uống bình dân với đồ ăn nhẹ và đồ ăn cho bữa trưa.<br></br><br></br>

                            Henderson Beach Resort nằm cách trung tâm mua sắm HarborWalk Village 8 km. Sân bay gần nhất là sân bay Destin-Fort Walton Beach, nằm trong bán kính 14 km từ chỗ nghỉ.

                            Các cặp đôi đặc biệt thích địa điểm này — họ cho điểm 9,4 cho kỳ nghỉ dành cho 2 người.
                        </p>

                        <p className="font-bold mt-8" >Các tiện nghi được ưa chuộng nhất</p>
                        <div className="flex items-center gap-3" >
                            <div className="flex items-center gap-3" >
                                <Image
                                    src="/images/BannerHome01.png"
                                    alt="Picture of the author"
                                    width="200"
                                    height="200"
                                    className="object-contain cursor-pointer"
                                />
                                Mien phi
                            </div>

                            <div className="flex items-center gap-3" >
                                <Image
                                    src="/images/BannerHome01.png"
                                    alt="Picture of the author"
                                    width="200"
                                    height="200"
                                    className="object-contain cursor-pointer"
                                />
                                Cho do xe mien phi
                            </div>

                            <div>

                            </div>
                        </div>
                    </div>

                    <div className="w-[25%] ml-auto flex flex-col gap-5 bg-[#E4F4FF] p-4" >
                          <p className="font-bold text-16" >Điểm nổi bật của chỗ nghỉ</p>
                          <p className="font-bold text-14" >Hoàn hảo cho kỳ nghỉ trong 4 tuần!</p>
                          <div className="flex items-center gap-3" >
                                <Location size="30" color="black" variant="Bold"/>
                                <p className="text-12" >Địa điểm hàng đầu: Được khách gần đây đánh giá cao (9,4 điểm)</p>
                          </div>

                          <ButtonBlue>Đặt ngay</ButtonBlue>
                          <ButtonBlue>Lưu chỗ nghỉ</ButtonBlue>
                    </div>
                   
                 </div>
             </div>
        </Section>
    )
}

export default HotelOverview
