
import SectionTitle from '@/common/components/Section/SectionTitle';
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';
import Image from 'next/image';

const Rewards_And_Wallet = (props : any) => {
    return (
        <Section>
            <div className='flex items-center justify-center flex-col bg-primary-blue text-white p-8' >
                 <p className='text-3xl font-bold' >Tặng thưởng & Ví</p>
                 <p>Tiết kiệm cho chuyến đi sắp tới của bạn với Booking.com</p>
            </div>
            <SectionBody>
                <div className='flex items-start gap-5 p-5 justify-center shadow-sm border rounded-md w-[70%] mx-auto' >
                    <div className='flex items-start justify-start w-1/2 gap-5 border-r p-2' >
                        <Image
                            src="/images/BannerHome01.png"
                            alt="Picture of the author"
                            width="150"
                            height="150"
                            className="object-contain"
                        />

                        <div>
                            <p className='text-2xl font-bold' >Số dư Ví</p>
                            <p className='text-12' >Bao gồm tất cả tặng thưởng có thể sử dụng</p>
                            <p className='font-bold' >0 VND</p>
                        </div>
                    </div>

                    <div className=' w-1/2' >
                            <p className='text-primary-blue text-12 cursor-pointer' >Xem hoạt động tặng thưởng & Ví</p>
                    </div>
                </div>
            </SectionBody>
        </Section>
    )
}

export default Rewards_And_Wallet
