import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import SearchByTypeCardItem from './SearchByTypeCardItem';

const ExploreCardItemList = () => {
  return (
    <Swiper navigation={true} slidesPerView={4}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }} modules={[Navigation]} className="mySwiper">
         <SwiperSlide>
             <SearchByTypeCardItem/>
        </SwiperSlide>

        <SwiperSlide>
             <SearchByTypeCardItem/>
        </SwiperSlide>


        <SwiperSlide>
             <SearchByTypeCardItem/>
        </SwiperSlide>


        <SwiperSlide>
             <SearchByTypeCardItem/>
        </SwiperSlide>


        <SwiperSlide>
             <SearchByTypeCardItem/>
        </SwiperSlide>


       
       
  </Swiper>
)
};

export default ExploreCardItemList ;
