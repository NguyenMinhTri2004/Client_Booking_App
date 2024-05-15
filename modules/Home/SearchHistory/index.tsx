import Image from 'next/image';
import Link from 'next/link';
import { Button } from "antd/lib";
import { Input } from 'antd/lib';
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';
import SectionSubtitle from '@/common/components/Section/SectionSubTitle';
import Section from "@/common/components/Section"
import CardSearchHistory from './CardSearchHistory';
import CardSearchHistoryList from './CardSearchHistoryList';

const SearchHistory = () => {
  return (
        <Section>
            <SectionTitle>
                   Tìm kiếm gần đây của bạn
            </SectionTitle>

            <SectionBody>
                <CardSearchHistoryList/>
            </SectionBody>
        </Section>
  );
};

export default SearchHistory;
