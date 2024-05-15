import { Card, Space } from 'antd/lib';
import Image from 'next/image';

const CardItem = (props : any) => {
    return (
        <Space direction="vertical" size={16} className='cursor-pointer shadow-sm'>
            <Card style={{ width: 270 }}>
            <Image
                    src="/images/BannerHome01.png"
                    alt="Picture of the author"
                    width="400"
                    height="50"
                    className="object-contain rounded-md"
            />
            <p className='text-base font-bold' >Card content</p>
            <p className='tex-sm font-light' >Card content Card content Card content</p>
            <div className='flex items-center gap-2' >
                <span className='bg-blue-600 p-1 text-white rounded-sm text-sm' >8.0</span>
                <p>Tuyet voi</p>
                <p>6969 danh gia</p>
            </div>

            <div className='right-0 mt-[3rem] flex items-end justify-end w-full' >
                <p>Bat dau tu <b>VND 99999999</b ></p>
            </div>
            </Card>
        </Space>
    )
}

export default CardItem