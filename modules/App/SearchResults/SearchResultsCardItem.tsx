
import Image from 'next/image';
import { HeartAdd } from 'iconsax-react';
import { useState} from 'react';
import { useRouter } from 'next/router';

interface HotelData {
    slug: string;
    images: string[];
    name: string;
    rate: string;
    pricePerDay: string;
}

interface SearchResultsCardItemProps {
    data: HotelData;
    isModal: boolean;
}

const SearchResultsCardItem : React.FC<SearchResultsCardItemProps> = ({data , isModal} : any) => {
    const router = useRouter();

    const [isWish , setIsWish] = useState(false)

    return (
        <div onClick = {() =>  router.push(`/hotel/${data?.slug}`)}  className='SearchResultsCardItem flex items-start justify-between border rounded-sm mb-3 gap-7 p-3 cursor-pointer hover:bg-slate-200 duration-75 ease-in-out' >
            <div className='SearchResultsCardItem__right w-1/2 relative' >
                    <Image
                            src={data?.images ? data?.images[0] : "/images/BannerHome01.png" }
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md object-cover"
                    />

                    <HeartAdd onClick={() => setIsWish(!isWish)} className='absolute z-10 top-0 right-0 ' size="25" color="black" variant={`${isWish ? 'Bold' : 'Outline'}`}/>
                    {/* <HeartAdd size="32" color="black" variant="Bold"/> */}
            </div>

            {
                isModal ?  <div className='SearchResultsCardItem__mid w-1/2' >
                <div className='mb-3' >
                    {
                        isModal ?  <p className= 'text-blue-600 text-base font-bold' >{data?.name}</p> :
                        <p className= 'text-blue-600 text-xl font-bold' >{data?.name}</p>
                    }
                   
                </div>

                <div className='mb-3' >
                    <p className='text-12' >Cách trung tâm 0,9km</p>
                </div>

                    <div className='flex items-start gap-3' >
                        <div>
                              <p>Tuyệt vời</p>
                              <p className='text-12' >100 đánh giá</p>
                        </div>
                         
                          <span className='bg-primary-blue text-white py-1 px-2 rounded-md' >{data?.rate}</span>
                    </div>
                    {/*   
                    <div className='font-bold text-primary-blue text-14'>
                          Địa điểm 9,7
                    </div> */}

                <div className='w-[70%] text-10 flex'>
                          <div className = "flex items-center justify-center gap-3" ><span className = "font-bold text-14" >Giá :</span> <p className = "text-14" >{data?.pricePerDay} VNĐ</p></div>
                </div>

                {
                    !isModal && (
                        <div className='mb-3' >
                            <p className='text-12' > Tọa lạc tại trung tâm thành phố Budapest, 
                                chỉ cách trung tâm giao thông công cộng chính 
                                Deak Ferenc tér 100 m, 7Seasons Apartments cung cấp
                                dịch vụ lễ tân 24 giờ và các căn hộ rộng rãi có 1 - 3 
                                phòng...
                            </p>
                        </div>
                    )
                }
               </div> :
                    <div className='SearchResultsCardItem__mid w-[60%]' >
                    <div className='mb-3' >
                        {
                            isModal ?  <p className= 'text-blue-600 text-base font-bold' >{data?.name}</p> :
                            <p className= 'text-blue-600 text-xl font-bold' >{data?.name}</p>
                        }
                       
                    </div>

                    <div className='mb-3' >
                        <p className='text-12' >Cách trung tâm 0,9km</p>
                    </div>

                    {
                        !isModal && (
                            <div className='mb-3' >
                                <p className='text-12' > Tọa lạc tại trung tâm thành phố Budapest, 
                                    chỉ cách trung tâm giao thông công cộng chính 
                                    Deak Ferenc tér 100 m, 7Seasons Apartments cung cấp
                                    dịch vụ lễ tân 24 giờ và các căn hộ rộng rãi có 1 - 3 
                                    phòng...
                                </p>
                            </div>
                        )
                    }
                       </div>
            }
       

            {
                !isModal && (
                    <div className='SearchResultsCardItem__left w-[25%] flex flex-col items-end' >
                    <div className='flex items-start gap-3' >
                        <div>
                              <p>Tuyệt vời</p>
                              <p className='text-12' >100 đánh giá</p>
                        </div>
                         
                          <span className='bg-primary-blue text-white py-1 px-2 rounded-md' >{data?.rate}</span>
                    </div>
  
                    <div className='font-bold text-primary-blue text-14'>
                          Địa điểm 9,7
                    </div>
  
                    <div className='w-[70%] text-10'>
                          <div className = "flex items-center justify-center gap-3" ><span className = "font-bold text-14" >Giá :</span> <p className = "text-14" >{data?.pricePerDay} VNĐ</p></div>
                    </div>
                     </div>
                )
            }
         
        </div>
    )
}

export default SearchResultsCardItem