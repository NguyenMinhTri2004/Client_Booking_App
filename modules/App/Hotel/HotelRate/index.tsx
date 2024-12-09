
import Section from "@/common/components/Section"
import SectionTitle from "@/common/components/Section/SectionTitle";
import SectionBody from '@/common/components/Section/SectionBody';
import Image from "next/image";
import { Space, Table, Tag } from 'antd/lib';
import type { TableProps } from 'antd/lib';
import { ButtonBlue, ButtonToPic } from "@/common/components/Button";
import HotelRatePointBar from "./HotelRatePointBar";
import HotelRateDrawer from "./HotelRateDrawer";
import { useState } from "react";

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
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleOpenDrawer = () => {
    showLoading();
  }
    return (
        <Section>
             <SectionTitle>
                <p>Đánh giá của khách</p>
                {/* <div>
                   <ButtonBlue>Xem phòng trống</ButtonBlue>
                </div> */}
             </SectionTitle>
                <div className="flex items-center my-4">
                    <div className="bg-blue-600 text-white text-xl font-bold px-3 py-1 rounded">8.3</div>
                    <div className="ml-3">
                      <span className="text-lg font-semibold">Very good</span>
                      <span className="text-gray-600">· 1,111 reviews</span>
                      <a href="#" className="text-blue-600 ml-2">Read all reviews</a>
                    </div>
                </div>
        
             <SectionBody>
                <p>Hạng mục:</p>
                <div className="flex items-center flex-wrap gap-5" >
                   <HotelRatePointBar name = {"Staff"} point = {"10"} />
                   <HotelRatePointBar name = {"Staff"} point = {"10"} />
                   <HotelRatePointBar name = {"Staff"} point = {"10"} />
                   <HotelRatePointBar name = {"Staff"} point = {"10"} />
                   <HotelRatePointBar name = {"Staff"} point = {"10"} />
                </div>
                <div className="my-5" >
                    <p className="font-bold mb-3" >Chọn chủ đề để đọc đánh giá:</p>
                    <div className="flex items-center gap-3" >
                      <div  className="flex items-center gap-3" >
                          <ButtonToPic handleOpenDrawer = {() => handleOpenDrawer()} openDrawer = {open}>
                              Vị trí
                          </ButtonToPic>
                      </div>

                      <div  className="flex items-center gap-3" >
                          <ButtonToPic handleOpenDrawer = {() => handleOpenDrawer()} openDrawer = {open}>
                              Vị trí
                          </ButtonToPic>
                      </div>

                      {/* <div onClick = {() => handleOpenDrawer()}  className="flex items-center gap-3" >
                          <ButtonToPic openDrawer = {open}>
                              Vị trí
                          </ButtonToPic>
                      </div>

                      <div onClick = {() => handleOpenDrawer()}  className="flex items-center gap-3" >
                          <ButtonToPic openDrawer = {open}>
                              Vị trí
                          </ButtonToPic>
                      </div> */}
                     
                    </div>
                </div>
                
                <HotelRateDrawer open = {open} setOpen = {setOpen} loading = {loading}/>
             </SectionBody>
        </Section>
    )
}

export default HotelRate
