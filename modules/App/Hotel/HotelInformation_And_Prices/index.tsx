
import Section from "@/common/components/Section"
import SectionTitle from "@/common/components/Section/SectionTitle";
import SectionBody from '@/common/components/Section/SectionBody';
import Image from "next/image";
import { Space, Table, Tag } from 'antd/lib';
import type { TableProps } from 'antd/lib';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Loại chỗ nghỉ',
      dataIndex: 'Loại chỗ nghỉ',
      key: 'Loại chỗ nghỉ',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Số lượng khách',
      dataIndex: 'Số lượng khách',
      key: 'Số lượng khách',
    },
    {
      title: 'Giá',
      dataIndex: 'Giá',
      key: 'Giá',
    },
    {
      title: 'Các lựa chọn',
      key: 'Các lựa chọn',
      dataIndex: 'Các lựa chọn',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Chọn phòng',
      key: 'Chọn phòng',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },

    {
      title: ' ',
      key: 'Chọn phòng',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  
const HotelInformation_And_Prices = (props : any) => {

    return (
        <Section>
             <SectionTitle>
                <p>Phòng trống</p>
             </SectionTitle>
             <p>Tất cả các căn hộ còn trống</p>

             <SectionBody>
                 <Table columns={columns} dataSource={data} />
             </SectionBody>
        </Section>
    )
}

export default HotelInformation_And_Prices
