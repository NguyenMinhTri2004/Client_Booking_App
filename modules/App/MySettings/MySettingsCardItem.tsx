
import Image from 'next/image';
import { Button } from "antd/lib";

const MySettingsCardItem = (props : any) => {
    return (
        <div className='MySettingsCardItem flex items-start gap-3 border rounded-md p-5 cursor-pointer w-[40%] hover:text-blue-500' >
                <div className='MySettingsCardItem__left' >
                    <Image
                        src="/images/BannerHome01.png"
                        alt="Picture of the author"
                        width="70"
                        height="70"
                        className="object-contain rounded-full"
                    />
                </div>

                <div className='MySettingsCardItem__right' >
                    <p>Thong tin ca nhan</p>
                    <p>Cap nhat thong tinll lllll</p>
                    <a className='text-primary-blue' href="">Quan ly thong tin ca nhan</a>
                </div>
        </div>
    )
}

export default MySettingsCardItem