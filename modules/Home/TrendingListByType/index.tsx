
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';
import SectionSubtitle from '@/common/components/Section/SectionSubTitle';
import Section from "@/common/components/Section"
import TrendingListByTypeCardItemList from './TrendingListByTypeCardItemList';
import { Tabs } from 'antd/lib'
import type { TabsProps } from 'antd/lib';

const TrendingListByType = () => {
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Tab 1',
          children: 'Content of Tab Pane 1',
        },
        {
          key: '2',
          label: 'Tab 2',
          children: 'Content of Tab Pane 2',
        },
        {
          key: '3',
          label: 'Tab 3',
          children: 'Content of Tab Pane 3',
        },
      ];

    const onChange = (key: string) => {
        console.log(key);
    };

  return (
        <Section>
            <SectionTitle>
                <p>Lên kế hoạch dễ dàng và nhanh chóng</p> 
            </SectionTitle>

            <SectionSubtitle>
                   Khám phá các điểm đến hàng đầu theo cách bạn thích ở Tây Ban Nha
            </SectionSubtitle>

            <SectionBody>
                <Tabs
                    defaultActiveKey="2"
                    items={items}
                    onChange={onChange}
                />
                <TrendingListByTypeCardItemList/>
            </SectionBody>
        </Section>
  );
};

export default TrendingListByType;
