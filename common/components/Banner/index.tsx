import { Card, Space } from 'antd/lib';
import Image from 'next/image';
import { ButtonBlue } from '../Button';

const Banner = (props : any) => {
    return (
       <div className='Banner bg-banner h-96 flex flexcol items-center' >
              <div className='Banner__content w-[40%] flex flex-col gap-3 ml-[14%]' >
                    <h1 className='Banner__content__title text-white font-semibold text-5xl' >Thoải mái như ở nhà với thiên đường du lịch</h1>
                    <p className='Banner__content__subtitle text-2xl text-white ' >Chọn cabin, nhà hoặc hơn thế nữa</p>
                    <div className='w-[40%]' >
                         <ButtonBlue>Khám phá nhà nghỉ dưỡng</ButtonBlue>
                    </div>
                    
              </div>
       </div>
    )
}

export default Banner