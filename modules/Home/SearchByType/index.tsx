
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';
import SectionSubtitle from '@/common/components/Section/SectionSubTitle';
import Section from "@/common/components/Section"
import SearchByTypeCardItemList from './SearchByTypeCardItemList';

const SearchByType = () => {
  return (
        <Section>
            <SectionTitle>
                <p>Tìm theo loại chỗ nghỉ</p> 
            </SectionTitle>
            
            <SectionBody>
                <SearchByTypeCardItemList/>
            </SectionBody>
        </Section>
  );
};

export default SearchByType;