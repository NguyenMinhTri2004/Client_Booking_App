
import Image from 'next/image';
import { Button } from "antd/lib";


const MyTripsCardItem = (props : any) => {
    return (
        <div className='MyTripsCardItem p-5 flex items-center justify-between rounded-md shadow-md cursor-pointer mb-3 border' >
              <div className='MyTripsCardItem__left flex items-start gap-3' >
                    <Image
                            src="/images/BannerHome01.png"
                            alt="Picture of the author"
                            width="100"
                            height="100"
                            className="object-contain"
                    />
                    <div>
                         <p>Joi Hopital</p>
                         <p>24 thang 6 - 28 thang 3</p>
                         <p>Da huy</p>
                    </div>
              </div>

              <div className='MyTripsCardItem__right flex items-start gap-3' >
                    <p>VND 256.298</p>
                    <p>:</p>
              </div>
        </div>
    )
}

export default MyTripsCardItem