import Image from "next/image"
import DiscountCardItem from "./DiscountCardItem"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

const DiscountCardItemList = ({data} : any) => {
    return (
        <Swiper navigation={true} slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }} modules={[Navigation , Pagination]} className="mySwiper">
          {
               data.map((item:any, index:number) => {
                    return (
                         <SwiperSlide key={index}>
                             <DiscountCardItem data={item}/>
                         </SwiperSlide>
                    )
 
               })
          }   
      </Swiper>
    )
}

export default DiscountCardItemList