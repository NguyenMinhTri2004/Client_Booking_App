import { ButtonBlue } from '@/common/components/Button';
import React, { useState } from 'react';
import {Wifi, ArrowDown2} from "iconsax-react"
import Image from 'next/image';
import CheckboxComponent from '@/common/components/Checkbox';
import { Car, TickCircle, CardAdd, GooglePlay, Paypal } from 'iconsax-react';


const BookDetail = (props : any) => {
    return (
        <div className='Booking' >

            <div className='Booking__content flex items-start mt-5 gap-5' >
                  <div className='Booking__content__left w-[35%]' >
                        <div className='Booking__content__left__child mb-4 border rounded-md p-5 flex flex-col gap-1'>
                        <div className='flex items-start gap-3' >
                              <p className='text-12' >Khách sạn</p>
                        </div>

                        <div>
                              <p className='font-bold' >Hotel Effie Sandestin</p>
                        </div>

                        <p>1 Grand Sandestin Boulevard, Destin, FL 32550, Mỹ</p>
                        <p className='text-12 text-green-700' >Vị trí xuất sắc — 9.3</p>
                        <div className='flex text-12 font-light items-center gap-2' >
                              <span className='p-1 bg-primary-blue text-12 h-6 w-6 flex items-center justify-center text-white'>9.1</span>
                              <p>Tuyệt hảo</p>
                              <p>1.748 đánh giá</p>
                        </div>

                        <ul className='flex items-center gap-3 flex-wrap' >
                              <li className='flex items-center gap-2' >
                                    <Wifi size="20" color="black"/>
                                    <p className='text-12' >WiFi miễn phí</p>
                              </li>

                              <li className='flex items-center gap-2' >
                                    <Wifi size="20" color="black"/>
                                    <p className='text-12' >WiFi miễn phí</p>
                              </li>

                              <li className='flex items-center gap-2' >
                                    <Wifi size="20" color="black"/>
                                    <p className='text-12' >WiFi miễn phí</p>
                              </li>

                              <li className='flex items-center gap-2' >
                                    <Wifi size="20" color="black"/>
                                    <p className='text-12' >WiFi miễn phí</p>
                              </li>

                        </ul>
                        </div>
                        <div className='Booking__content__left__child border mb-4 rounded-md p-5 flex flex-col gap-1'>
                              
                              <div>
                                    <p className='font-bold' >Chi tiết đặt phòng của bạn</p>
                              </div>

                  
                              <div className='flex items-start gap-16' >
                                    <div className='w-[35%]' >
                                          <p className='text-14'>Nhận phòng</p>
                                          <div className='' >
                                                <p className='font-bold' >T4, 24 tháng 4 2024</p>
                                                <p className='text-14 text-slate-600' >Từ 16:00</p>
                                          </div>
                                    </div>

                                    <div className='w-[35%]'>
                                          <p className='text-14 pl-5'>Trả phòng</p>
                                          <div className='border-l pl-5' >
                                                <p className='font-bold' >T4, 22 tháng 5 2024</p>
                                                <p className='text-14 text-slate-600' >Cho đến 11:00</p>
                                          </div>
                                    
                                    </div>
                                    
                              </div>

                              <div className='mt-4 border-b pb-3' >
                                    <p className='text-14' >Tổng thời gian lưu trú:</p>
                                    <p className='font-bold text-14' >4 tuần</p>
                              </div>

                              <div className='mt-4 flex items-center justify-between' >
                                    <div>
                                          <p className='text-14' >Bạn đã chọn</p>
                                          <p className='font-bold text-16' >1 phòng cho 2 người lớn</p>
                                    </div>
                                  
                                    <ArrowDown2 className='cursor-pointer' size="20" color="black"/>
                              </div>

                              <div>
                                    <p className='font-bold text-14 cursor-pointer mt-5 text-primary-blue' >Đổi lựa chọn của bạn</p>
                              </div>

                        <div>

                        </div>

                        </div>

                        <div className='Booking__content__left__child mb-4 border rounded-md p-5 flex flex-col gap-1'>
                              <div>
                                    <p className='font-bold' >Tóm tắt giá</p>
                              </div>

                              <div className='flex items-start justify-between text-14' >
                                    <p>Giá gốc</p>
                                    <p>VND 265.848.060</p>
                              </div>

                              <div className='flex items-start justify-between text-14' >
                                    <div>
                                          <p>Giảm giá</p>
                                          <p className='text-12 w-[75%]' >Bạn nhận được giảm giá vì chỗ nghỉ này đang có ưu đãi.</p>
                                    </div>
                                    
                                    <p className='w-1/2 text-end' >- VND 47.852.651</p>
                              </div>

            

                              <div className='flex items-start justify-between text-14' >
                                    <div>
                                          <p>Giảm giá Genius</p>
                                          <p className='text-12 w-[75%]' >Bạn nhận được giảm giá vì bạn là thành viên Genius.</p>
                                    </div>
                                    
                                    <p className='w-1/2 text-end' >- VND 26.584.806</p>
                              </div>

                              
                        </div>

                        <div className='flex items-center justify-between text-14 p-5 border rounded-md bg-[#EBF3FF]' >
                                     <p className='font-bold text-2xl' >Giá</p>
                                     <div className='text-end' >
                                          <del className='text-16 text-red-600' >VND 265.848.060</del>
                                          <p className='font-bold text-2xl' >VND 191.410.603</p>
                                          <p>+VND 58.523.175 thuế và phí</p>
                                          <p>Theo loại tiền tệ của chỗ nghỉ: US$7.597,44</p>
                                     </div>
                       </div>
                  </div>
                 

                 <div className='Booking__content__right w-[70%]'>
                        <div className='Booking__content__right__child items-start p-5 mb-5 border rounded-md w-full flex flex-col gap-3' >
                                <p className='text-xl font-semibold' >Khi nào bạn muốn thanh toán?</p>
                                {/* <div className='w-full flex flex-wrap gap-5 border-b pb-5' >
                                     <div className='flex flex-col w-[48%]'>
                                          <label className='text-14 font-bold' >Họ (tiếng Anh)<span className='text-red-500' >*</span></label>
                                          <input className='border border-black rounded-md w-full p-2' type="text" name="" id="" />
                                     </div>

                                     <div className='flex flex-col w-[48%]'>
                                          <label className='text-14 font-bold' >Tên (tiếng Anh)<span className='text-red-500' >*</span></label>
                                          <input className='border border-black rounded-md w-full p-2' type="text" name="" id="" />
                                     </div>

                                     <div className='flex flex-col w-[48%]'>
                                          <label className='text-14 font-bold' >Địa chỉ email<span className='text-red-500' >*</span></label>
                                          <input className='border border-black rounded-md w-full p-2' type="text" name="" id="" />
                                     </div>
                                </div>

                                <p className='font-bold text-16' >Địa chỉ của bạn</p>

                                <div className='w-full flex flex-wrap gap-5 border-b pb-5' >
                                     <div className='flex flex-col w-[48%]'>
                                          <label className='text-14 font-bold'>Địa chỉ<span className='text-red-500' >*</span></label>
                                          <input className='border border-black rounded-md w-full p-2' type="text" name="" id="" />
                                     </div>

                                     <div className='flex flex-col w-[48%]'>
                                          <label className='text-14 font-bold'>Thành phố <span className='text-red-500' >*</span></label>
                                          <input className='border border-black rounded-md w-full p-2' type="text" name="" id="" />
                                     </div>

                                     <div className='flex flex-col w-[48%]'>
                                          <label className='text-14 font-bold' >Vùng/quốc gia<span className='text-red-500' >*</span></label>
                                          <select className='border border-black rounded-md w-full p-2' name="" id="" />
                                     </div>

                                     <div className='flex flex-col w-[48%]'>
                                          <label className='text-14 font-bold' >Zip/Mã Bưu điện</label>
                                          <input className='border border-black rounded-md w-full p-2' type="text" name="" id="" />
                                     </div>

                                     <div className='flex flex-col w-[48%]'>
                                          <label className='text-14 font-bold' >Điện thoại (ưu tiên số ĐTDĐ)<span className='text-red-500' >*</span></label>
                                          <input className='border border-black rounded-md w-full p-2' type="text" name="" id="" />
                                     </div>
                                </div>

                                <p className='font-bold text-16' >Bạn đặt phòng cho ai?</p> */}

                                <div className='w-full border-b pb-5' >
                                      <div className='flex items-start gap-2 w-full mb-1' >
                                           <input type="radio" name="type" id="type" />
                                           <div className='mb-2' >
                                                 <p className='font-bold text-14' >Trả trước một phần, phần còn lại trả sau</p>
                                                 <p className='text-12' >Bạn sẽ thanh toán 354.30 US$ ngay bây giờ. 
                                                    Hệ thống sẽ tự động thu số tiền còn lại (9566.03 US$)
                                                    vào 22 tháng 4 2024.
                                                </p>
                                           </div>
                                           
                                      </div>

                                      <div className='flex items-start gap-2 w-full mb-1' >
                                           <input type="radio" name="type" id="type" />
                                           <div className='mb-2' >
                                                 <p className='font-bold text-14' >Thanh toán ngay</p>
                                                 <p className='text-12' >Bạn sẽ thanh toán với Booking.com khi hoàn tất đặt phòng này.
                                                  Bạn có thể hủy trước ngày 17 tháng 4 năm 2024 để được hoàn tiền đầy đủ.
                                                </p>
                                           </div>
                                           
                                      </div>
                                </div>
                       </div>

                       <div className='Booking__content__right__child items-start p-5 mb-5 border rounded-md w-full flex flex-col gap-3' >
                                <p className='text-xl font-semibold' >Bạn muốn thanh toán bằng cách nào?</p>
                                <div className='flex items-center gap-5' >
                                    <div className='flex flex-col items-center justify-center gap-2' >
                                          <div className='flex items-center justify-center shadow-lg border rounded-md w-36 h-28 cursor-pointer'>
                                                <CardAdd size="40" color="blue"/>
                                                
                                          </div>
                                          <p className='text-14' >Thẻ mới</p>
                                    </div>
                                     
                                    <div  className='flex flex-col items-center justify-center gap-2'  >
                                          <div className='flex items-center justify-center shadow-lg border rounded-md w-36 h-28 cursor-pointer'>
                                                <GooglePlay size="40" color="red"/>
                                          </div>
                                          <p className='text-14' >Google Pay</p>
                                    </div>
                                     

                                    <div  className='flex flex-col items-center justify-center gap-2'  >
                                          <div className='flex items-center justify-center shadow-lg border rounded-md w-36 h-28 cursor-pointer'>
                                                <Paypal size="40" color="black"/>
                                          </div>
                                          <p className='text-14' >PayPal</p>
                                    </div>
                                </div>
                               
                       </div>

                       <div className='w-1/3 ml-auto' >
                              <ButtonBlue>
                                     Hoàn tất đặt chỗ
                              </ButtonBlue>
                       </div>
                 </div>
            </div>
        </div>
    )
}

export default BookDetail
