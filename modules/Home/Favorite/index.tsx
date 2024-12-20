
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';
import Section from "@/common/components/Section"
import FavoriteCartItemList from './FavoriteCartItemList';

const Favorite = ({data} : any) => {
  console.log("From Favorite" , data)

  return (
        <Section>
            <SectionTitle>
                <p>Nhà ở mà khách yêu thích</p> 
                <a className='text-sm text-blue-600 cursor-pointer' >Tìm các chỗ nghỉ như ở nhà</a>
            </SectionTitle>

            <SectionBody>
                  <FavoriteCartItemList data = {data} />
            </SectionBody>
        </Section>
  );
};

export default Favorite;
