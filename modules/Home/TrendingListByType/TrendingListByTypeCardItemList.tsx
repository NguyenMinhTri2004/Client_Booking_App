import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import TrendingListByTypeCardItem from './TrendingListByTypeCardItem';

const TrendingListByTypeCardItemList = () => {
  return (
    <Swiper navigation={true} slidesPerView={6}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }} modules={[Navigation]} className="mySwiper">
         <SwiperSlide>
             <TrendingListByTypeCardItem/>
        </SwiperSlide>

        <SwiperSlide>
             <TrendingListByTypeCardItem/>
        </SwiperSlide>

        <SwiperSlide>
             <TrendingListByTypeCardItem/>
        </SwiperSlide>


        <SwiperSlide>
             <TrendingListByTypeCardItem/>
        </SwiperSlide>

        <SwiperSlide>
             <TrendingListByTypeCardItem/>
        </SwiperSlide>


        <SwiperSlide>
             <TrendingListByTypeCardItem/>
        </SwiperSlide>

        <SwiperSlide>
             <TrendingListByTypeCardItem/>
        </SwiperSlide>


        <SwiperSlide>
             <TrendingListByTypeCardItem/>
        </SwiperSlide>


       
  </Swiper>
)
};

export default TrendingListByTypeCardItemList ;
