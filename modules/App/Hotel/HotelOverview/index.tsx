
import Section from "@/common/components/Section"
import MiniMap from '@/common/components/Map/MiniMap';
import { ButtonBlue } from "@/common/components/Button";
import { DatePicker, Space } from 'antd/lib';
import Image from "next/image";
import CheckboxComponent from "@/common/components/Checkbox";
import { FaStar, FaThumbsUp, FaUmbrellaBeach, FaMapMarkerAlt, FaHeart, FaShareAlt, FaTag } from 'react-icons/fa';
import { Location } from "iconsax-react";
import HotelServiceItem from "../HotelServiceItem";

const HotelOverview = ({data}:any) => {
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
                               <MiniMap setOpen={function (value: boolean): void {
                                throw new Error("Function not implemented.");
                            } }/>
                            </div>
                             
                        </div>

                        <div className='HotelOverview__right' >
                                {/* <div className="HotelOverview__right__top flex items-center justify-between" >
                                       <div>
                                             <p>Bãi biển</p>
                                             <p className="font-bold text-2xl" >{data?.name}</p>
                                             <div className="flex items-center gap-1" >
                                                 <Location size="20" color="blue" variant="Bold"/>
                                                 <p className="text-14" >{data?.streetName} - {data?.city} - {data?.region}
                                                </p>
                                             </div>
                                             
                                       </div>

                                       <div className="" >
                                            <div className="flex items-center justify-center gap-5" >
                                                <HeartAdd className="cursor-pointer" size="45" color="blue"/>
                                                <Share className="cursor-pointer" size="45" color="blue"/>
                                                <ButtonBlue>Đặt ngay</ButtonBlue>  
                                            </div>
                                         
                                       </div>
                                        
                                       
                                </div> */}

                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                        <div className="flex items-center space-x-1">
                                            <div className="flex items-center text-yellow-500">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            </div>
                                            <div className="flex items-center text-yellow-500">
                                            <FaThumbsUp />
                                            </div>
                                            <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                            <FaUmbrellaBeach /> Beachfront · Private beach
                                            </div>
                                        </div>
                                        <h1 className="text-2xl font-bold mt-2">The IMPERIAL Vung Tau Hotel</h1>
                                        <div className="flex items-center text-sm mt-1">
                                            <FaMapMarkerAlt className="text-blue-500" />
                                            <span className="ml-1">159 Thuy Van Street, Vung Tau, Vietnam –</span>
                                            <a href="#" className="text-blue-600 font-semibold ml-1">Excellent location - show map</a>
                                        </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                        <FaHeart className="text-blue-500 text-xl" />
                                        <FaShareAlt className="text-blue-500 text-xl" />
                                        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">Reserve</button>
                                        <div className="flex items-center text-blue-600">
                                            <FaTag />
                                            <span className="ml-1">We Price Match</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="HotelOverview__right__bottom" >
                                     <div className="HotelOverview__right__bottom__bigImg flex items-center gap-3" >
                                        <div className="HotelOverview__right__bottom__bigImg__left flex flex-col ">
                                            {
                                                data?.images.map((image: any, index: any) => {
                                                    return (
                                                        <Image
                                                            key={index}
                                                            src={image}
                                                            alt="Picture of the author"
                                                            width="250"
                                                            height="150"
                                                            className="object-contain cursor-pointer"
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                         <div className="HotelOverview__right__bottom__bigImg__right">
                                            <Image
                                                src= {data?.images[0]}
                                                alt="Picture of the author"
                                                width="600"
                                                height="100"
                                                className="object-contain cursor-pointer"
                                            />
                                        </div>
                                     </div>
                                        

                                        <div className="flex items-center gap-3" >
                                            {
                                                data?.images?.slice(0,4)?.map((image: any, index: any) => {
                                                    return (
                                                        <Image
                                                            key={index}
                                                            src={image}
                                                            alt="Picture of the author"
                                                            width="250"
                                                            height="150"
                                                            className="object-contain cursor-pointer"
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                </div>

                        </div>
                 </div>

                 <div className="" >
                    {
                        data?.attributes &&  Object.keys(data?.attributes).map((item: string, index: number) => (
                                <div key={index} className="">
                                    {/* <Image
                                        src="/images/BannerHome01.png"
                                        alt="Picture of the author"
                                        width="20"
                                        height="20"
                                    /> */}
                                    <h1 className="font-bold text-base my-5" >{item.toUpperCase()}</h1>
                                    {/* <p>{data.attributes[item]}</p>
                                    {item} */}

                                    {
                                        Object.keys(data?.attributes[item]).length > 1 ? <div className="flex items-center gap-2" >
                                            {
                                                Object.keys(data?.attributes[item]).map((child: string, index: number) => (
                                                    // <span key={index} className="mx-5 border border-blue-500 rounded-lg p-3 cursor-pointer shadow-md outline-none">
                                                    //     <p className="font-bold" >{child}</p>
                                                    //     <p className="text-sm" >
                                                    //         ( 
                                                    //             {data.attributes[item][child]}
                                                    //         )
                                                    //     </p>
                                                        
                                                    // </span>

                                                    <HotelServiceItem title = {child} detail = {data.attributes[item][child]} key = {index}/>
                                                ))
                                            }
                                        </div> 
                                        :   <HotelServiceItem detail = {data.attributes[item]}/>
                                    }
                                </div>
                        ))
                    }
                 </div>

                 <div className="mt-5 flex items-start gap-10" >
                    <div className="w-[70%]" >
                         <p className="text-base my-5 text-wrap text-justify" >{data?.details}</p>
                        
                         <button className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
                              Show me more
                        </button>

                        <p className="font-bold mt-8" >Các tiện nghi được ưa chuộng nhất</p>

                        {
                            data?.convenients &&  Object.keys(data?.convenients).map((item: string, index: number) => (
                                    <div key={index} className="">
                                        <h1 className="font-bold text-sm my-5" >{item.toUpperCase()}</h1>             

                                        <div className="flex items-center gap-3 flex-wrap" >
                                            {
                                                data.convenients[item].map((item:string, index:number) => (
                                                    // <span key={index} className="mx-5 border border-slate-400 rounded-sm p-3 cursor-pointer">
                                                    //   {item}
                                                    // </span>

                                                    <HotelServiceItem title = {item}key = {index}/>
                                                ))
                                            }
                                        </div>   
                                    </div>
                            ))
                        }
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
