
import Image from 'next/image';
import { Button } from "antd/lib";
import { Select, Space } from 'antd/lib';
import type { SelectProps } from 'antd/lib';

const SearchResultsSort = (props : any) => {

    const options: SelectProps['options'] = [];

    for (let i = 10; i < 36; i++) {
    options.push({
        label: i.toString(36) + i,
        value: i.toString(36) + i,
    });
    }

    const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
    };
    
    return (
        <Space style={{ width: '100%' }} direction="vertical" className='mb-1' >
            <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
                options={options}
            />
        </Space>   
    )
}

export default SearchResultsSort