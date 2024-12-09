import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import CardItem from '@/common/components/Card';

const FavoriteCartItemList = ({data} : any) => {
  console.log("Data from fvrList", data);
  return (
    <Swiper navigation={true} slidesPerView={4}
      spaceBetween={100}
      pagination={{
        clickable: true,
      }} modules={[Navigation]} className="mySwiper">
        {
            data && data?.map((item : any , index : any) => {
                
                  return (
                    <SwiperSlide key = {index}>
                          <CardItem data = {item}/>
                    </SwiperSlide>
                  )
              })
        }  
  </Swiper>
)
};

export default FavoriteCartItemList ;
