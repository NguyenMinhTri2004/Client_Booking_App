import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import CardItem from '@/common/components/Card';

const FavoriteCartItemList = () => {
  return (
    <Swiper navigation={true} slidesPerView={4}
    spaceBetween={50}
    pagination={{
      clickable: true,
    }} modules={[Navigation , Pagination]} className="mySwiper">
         <SwiperSlide>
             <CardItem/>
        </SwiperSlide>

        <SwiperSlide>
             <CardItem/>
        </SwiperSlide>

        <SwiperSlide>
             <CardItem/>
        </SwiperSlide>


        <SwiperSlide>
             <CardItem/>
        </SwiperSlide>

       
  </Swiper>
)
};

export default FavoriteCartItemList ;
