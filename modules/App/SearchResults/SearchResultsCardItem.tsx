
import Image from 'next/image';
import { ButtonBlue } from '@/common/components/Button';
import { HeartAdd } from 'iconsax-react';
import { useState } from 'react';

const SearchResultsCardItem = (props : any) => {
    const [wishList , setwishList] = useState(false)
    return (
        <div className='SearchResultsCardItem flex items-start justify-between border rounded-sm mb-3 gap-7 p-3 cursor-pointer' >
            <div className='SearchResultsCardItem__right w-[25%] relative' >
                    <Image
                            src="/images/BannerHome01.png"
                            alt="Picture of the author"
                            width="400"
                            height="50"
                            className="object-contain rounded-md"
                    />

                    <HeartAdd onClick={() => setwishList(!wishList)} className='absolute z-10 top-0 right-0 ' size="25" color="black" variant={`${wishList ? 'Bold' : 'Outline'}`}/>
                    {/* <HeartAdd size="32" color="black" variant="Bold"/> */}
            </div>

            <div className='SearchResultsCardItem__mid w-[60%]' >
                    <div className='mb-3' >
                        <p className='text-xl text-blue-600 font-bold' >7Seasons Apartments Budapest</p>
                    </div>

                    <div className='mb-3' >
                        <p className='text-12' >Cách trung tâm 0,9km</p>
                    </div>

                    <div className='mb-3' >
                        <p className='text-12' > Tọa lạc tại trung tâm thành phố Budapest, 
                            chỉ cách trung tâm giao thông công cộng chính 
                            Deak Ferenc tér 100 m, 7Seasons Apartments cung cấp
                            dịch vụ lễ tân 24 giờ và các căn hộ rộng rãi có 1 - 3 
                            phòng...
                        </p>
                    </div>
            </div>

            <div className='SearchResultsCardItem__left w-[25%] flex flex-col items-end' >
                  <div className='flex items-start gap-3' >
                      <div>
                            <p>Tuyệt vời</p>
                            <p className='text-12' >100 đánh giá</p>
                      </div>
                       
                        <span className='bg-primary-blue text-white p-1 rounded-md' >8.8</span>
                  </div>

                  <div className='font-bold text-primary-blue text-14'>
                        Địa điểm 9,7
                  </div>

                  <div className='w-[70%] text-10'>
                         <ButtonBlue>Hiển thị giá</ButtonBlue>
                  </div>
            </div>
        </div>
    )
}

export default SearchResultsCardItem