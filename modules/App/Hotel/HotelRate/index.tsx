
import Section from "@/common/components/Section"
import SectionTitle from "@/common/components/Section/SectionTitle";
import SectionBody from '@/common/components/Section/SectionBody';
import Image from "next/image";
import { Space, Table, Tag } from 'antd/lib';
import type { TableProps } from 'antd/lib';
import { ButtonBlue } from "@/common/components/Button";

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
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
      title: 'Action',
      key: 'action',
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
  

const HotelRate = (props : any) => {

    return (
        <Section>
             <SectionTitle>
                <p>Đánh giá của khách</p>
                <div>
                   <ButtonBlue>Xem phòng trống</ButtonBlue>
                </div>
             </SectionTitle>
        
             <SectionBody>
                <p>Hạng mục:</p>
                <div>
                    <p>Chọn chủ đề để đọc đánh giá:</p>
                    <div className="flex items-center gap-3" >
                        <div>
                            + Vi tri
                        </div>
                        <div>
                            + Vi tri
                        </div>
                        <div>
                            + Vi tri
                        </div>
                        <div>
                            + Vi tri
                        </div>
                    </div>
                </div>
                
             
             </SectionBody>
        </Section>
    )
}

export default HotelRate
