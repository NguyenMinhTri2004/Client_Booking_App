
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';
import SectionSubtitle from '@/common/components/Section/SectionSubTitle';
import Section from "@/common/components/Section"
import Image from 'next/image';

const Trending = () => {
  return (
        <Section>
            <SectionTitle>
                <p>Nhà ở mà khách yêu thích</p> 
            </SectionTitle>

            <SectionSubtitle>
                  Các lựa chọn phổ biến nhất cho du khách từ Việt Nam
            </SectionSubtitle>

            <SectionBody>
                  <div className='flex flex-col items-center justify-center gap-5' >
                     <div className='flex items-center gap-5' >
                            <Image
                                src="/images/BannerHome01.png"
                                alt="Picture of the author"
                                width="400"
                                height="50"
                                className="object-contain"
                            />

                            <Image
                                src="/images/BannerHome01.png"
                                alt="Picture of the author"
                                width="400"
                                height="50"
                                className="object-contain"
                            />
                     </div>

                     <div className='flex items-center gap-5' >
                            <Image
                                src="/images/BannerHome01.png"
                                alt="Picture of the author"
                                width="400"
                                height="50"
                                className="object-contain"
                            />

                            <Image
                                src="/images/BannerHome01.png"
                                alt="Picture of the author"
                                width="400"
                                height="50"
                                className="object-contain"
                            />

                            <Image
                                src="/images/BannerHome01.png"
                                alt="Picture of the author"
                                width="400"
                                height="50"
                                className="object-contain"
                            />

                     </div>
                  </div>
            </SectionBody>
        </Section>
  );
};

export default Trending ;
