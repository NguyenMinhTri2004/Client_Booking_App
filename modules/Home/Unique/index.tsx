
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';4
import SectionSubtitle from '@/common/components/Section/SectionSubTitle';
import Section from "@/common/components/Section"
import UniqueCardItemList from './UniqueCardItemList';

const Unique = () => {
  return (
        <Section>
            <SectionTitle>
                <p>Lưu trú tại các chỗ nghỉ độc đáo hàng đầu</p> 
            </SectionTitle>

            <SectionSubtitle>
                   Từ biệt thự, lâu đài cho đến nhà thuyền, igloo, chúng tôi đều có hết
            </SectionSubtitle>

            <SectionBody>
                  <UniqueCardItemList/>
            </SectionBody>
        </Section>
  );
};

export default Unique;
