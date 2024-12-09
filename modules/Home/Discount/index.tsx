import Image from 'next/image';
import Link from 'next/link';
import { Button } from "antd/lib";
import { Input } from 'antd/lib';
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';
import SectionSubtitle from '@/common/components/Section/SectionSubTitle';
import Section from "@/common/components/Section"
import DiscountCardItemList from './DiscountCardItemList';

const Discount = ({data} : any) => {

  console.log("Data from discount", data);

  return (
        <Section>
            <SectionTitle>
                Ưu đãi
            </SectionTitle>

            <SectionSubtitle>
                Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn
            </SectionSubtitle>

            <SectionBody>
                 <DiscountCardItemList data = {data}/>
            </SectionBody>
        </Section>
  );
};

export default Discount;
