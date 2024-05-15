import Image from "next/image"
import DiscountCardItem from "./DiscountCardItem"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

const DiscountCardItemList = (props : any) => {
    return (
        <Swiper navigation={true} slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }} modules={[Navigation , Pagination]} className="mySwiper">
             <SwiperSlide>
                 <DiscountCardItem/>
            </SwiperSlide>

            <SwiperSlide>
                 <DiscountCardItem/>
            </SwiperSlide>

            <SwiperSlide>
                 <DiscountCardItem/>
            </SwiperSlide>

            <SwiperSlide>
                 <DiscountCardItem/>
            </SwiperSlide> 
           
      </Swiper>
    )
}

export default DiscountCardItemList