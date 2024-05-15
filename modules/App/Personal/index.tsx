
import {Tabs} from 'antd/lib';
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';

const Personal = (props : any) => {
    

    return (
        <Section>
            <SectionBody>
                <Tabs
                        tabPosition={'left'}
                        items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of Tab ${id}`,
                        };
                        })}
                />
            </SectionBody>
        </Section>
    )
}

export default Personal