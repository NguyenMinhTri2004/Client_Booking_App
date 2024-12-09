
import { ButtonBlue } from '../Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';


const Banner = ({data} : any) => {
    console.log("Data from banner", data);
    
    return (
        <div>
                <Swiper navigation={true} slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }} modules={[Navigation]} className="mySwiper">
                    {
                        data.map((item:any, index:number) => {
                            const imageUrl = item?.attributes?.Image?.data?.attributes?.formats?.large?.url;
                            const backgroundImage = imageUrl
                                ? `url(${process.env.NEXT_PUBLIC_API_STRAPI_HOST}${imageUrl})`
                                : '';
                                return (
                                    <SwiperSlide className="" key={index}>
                                       <div style={{ backgroundImage }}  className=' bg-cover justify-start bg-no-repeat bg-center Banner h-96 flex items-center relative' >
                                        <div className='w-full h-full bg-black bg-opacity-60 absolute'  ></div>
                                            <div className='Banner__content w-[40%] flex flex-col gap-3 ml-[10%] z-10' >
                                                    <h1 className='Banner__content__title text-white font-semibold text-5xl' >{item?.attributes?.Title}</h1>
                                                    <p className='Banner__content__subtitle text-2xl text-white ' >{item.attributes?.SubTitle}</p>
                                                    <div className='w-[40%]' >
                                                        <ButtonBlue>{item?.attributes?.TextButton}</ButtonBlue>
                                                    </div>
                                            
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )

                        })
                    }   
                </Swiper>
                
        </div>
    )
}

export default Banner