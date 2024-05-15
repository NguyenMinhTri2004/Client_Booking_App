
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';
import SectionSubtitle from '@/common/components/Section/SectionSubTitle';
import Section from "@/common/components/Section"
import { Tabs } from 'antd/lib'
import type { TabsProps } from 'antd/lib';

const FavoriteByLocation = () => {
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

  return (
        <Section>
            <SectionTitle>
                <p>Các điểm đến được chúng tôi ưa thích</p> 
            </SectionTitle>

            <SectionSubtitle>
                   Khám phá các điểm đến hàng đầu theo cách bạn thích ở Tây Ban Nha
            </SectionSubtitle>

            <SectionBody>
                <Tabs
                    defaultActiveKey="2"
                    items={items}
                />
            </SectionBody>
        </Section>
  );
};

export default FavoriteByLocation;
