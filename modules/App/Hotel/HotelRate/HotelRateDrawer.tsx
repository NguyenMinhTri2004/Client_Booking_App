import React, { useState } from 'react';
import { Drawer, Select, Space } from 'antd/lib';
import Point from '@/common/components/Point';
import { ButtonToPic, ButtonTransparent } from '@/common/components/Button';
import HotelRatePointBar from './HotelRatePointBar';
import SectionBody from '@/common/components/Section/SectionBody';
import HotelRateDrawerComment from './HotelRateDrawerComment';

const HotelRateDrawer = ({open, setOpen, loading} : any) => {

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Drawer
        closable
        destroyOnClose
        title={
          <div className='flex items-center justify-between' >
            <div className='flex items-center gap-2' >
                <Point>
                    10
                </Point>
                <div className='' >
                  <p className='text-base' >Exceptional</p>
                  <p className='text-12 font-normal' >14 reviews</p>
                </div>
                <p className='text-12 text-green-600 font-medium ml-2' >We aim for 100% real reviews</p>
            </div>

            <div>
                <ButtonTransparent drawer = {true}>
                    Write a review
                </ButtonTransparent>
            </div>
          </div>
        }
        placement="right"
        open={open}
        loading={loading}
        size = {"large"}
        onClose={() => handleClose()}
        className = "overflow-y-scroll"
      >
         <SectionBody>
                <div className = "py-4 border-b border-slate-200">
                  <p className = "font-bold text-base mb-2" >Danh mục:</p>
                  <div className="flex items-center flex-wrap gap-5" >
                    <HotelRatePointBar name = {"Staff"} point = {"10"} />
                    <HotelRatePointBar name = {"Staff"} point = {"10"} />
                    <HotelRatePointBar name = {"Staff"} point = {"10"} />
                    <HotelRatePointBar name = {"Staff"} point = {"10"} />
                    <HotelRatePointBar name = {"Staff"} point = {"10"} />
                  </div>
                </div>
                
                <div className = "py-4 border-b border-slate-200">
                  <h3 className = "font-bold text-base my-2" >Bộ lọc</h3>
                  <div className='mt-5' >
                    <Space className="" wrap>
                        <Select
                            defaultValue="lucy"
                            style={{ width: 120, color : "black" }}
                            onChange={handleChange}
                            className = "text-black"
                            options={[
                              { value: 'jack', label: 'Jack' },
                              { value: 'lucy', label: 'Lucy' },
                              { value: 'Yiminghe', label: 'yiminghe' },
                              { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                          />
                        <Select
                          defaultValue="lucy"
                          style={{ width: 120 }}
                          disabled
                          options={[{ value: 'lucy', label: 'Lucy' }]}
                        />
                        <Select
                          defaultValue="lucy"
                          style={{ width: 120 }}
                          loading
                          options={[{ value: 'lucy', label: 'Lucy' }]}
                        />
                        <Select
                          defaultValue="lucy"
                          style={{ width: 120 }}
                          allowClear
                          options={[{ value: 'lucy', label: 'Lucy' }]}
                        />
                    </Space>
                  </div>
                  <div className="my-5" >
                      <p className="mb-3" >Chọn chủ đề để đọc đánh giá:</p>
                      <div className="flex items-center gap-3" >
                        <div  className="flex items-center gap-3" >
                            <ButtonToPic openDrawer = {open}>
                                Vị trí
                            </ButtonToPic>
                        </div>

                        <div  className="flex items-center gap-3" >
                            <ButtonToPic openDrawer = {open}>
                                Vị trí
                            </ButtonToPic>
                        </div>
                      </div>
                  </div>
                </div>

                <div className = "py-4 border-b border-slate-200">
                   <div className='flex items-center justify-between mb-10' >
                       <p className = "font-bold text-base" >Đánh giá của khách</p>
                       <div className = "flex items-center justify-between gap-2" >
                            <p>Sắp xếp theo:</p>
                            <Select
                              defaultValue="lucy"
                              style={{ width: 120, color : "black" }}
                              onChange={handleChange}
                              className = "text-black"
                              options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                              ]}
                          />
                       </div>

                   </div>
                   
                    <div>
                           <HotelRateDrawerComment/>
                           <HotelRateDrawerComment/>
                           <HotelRateDrawerComment/>
                           <HotelRateDrawerComment/>
                    </div>
                </div>
                
             </SectionBody>
      </Drawer>
    </>
  );
};

export default HotelRateDrawer;