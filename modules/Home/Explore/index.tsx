
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';
import SectionSubtitle from '@/common/components/Section/SectionSubTitle';
import Section from "@/common/components/Section"
import ExploreCardItemList from './ExploreCardItemList';

const Explore = () => {
  return (
        <Section>
            <SectionTitle>
                <p>Khám phá Việt Nam</p> 
            </SectionTitle>

            <SectionSubtitle>
                 Các điểm đến phổ biến này có nhiều điều chờ đón bạn
            </SectionSubtitle>

            <SectionBody>
                <ExploreCardItemList/>
            </SectionBody>
        </Section>
  );
};

export default Explore;
