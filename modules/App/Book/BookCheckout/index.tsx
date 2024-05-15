import { ButtonBlue } from '@/common/components/Button';
import React, { useState } from 'react';
import {Wifi, ArrowDown2} from "iconsax-react"
import Image from 'next/image';
import CheckboxComponent from '@/common/components/Checkbox';
import { Car, TickCircle } from 'iconsax-react';


const BookCheckout = (props : any) => {
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
                        <div className='Booking__content__right__child flex items-center gap-2 p-5 mb-5 border rounded-md w-full' >
                             
                              <Image
                                          src="/images/BannerHome01.png"
                                          alt="Picture of the author"
                                          width="100"
                                          height="100"
                                          className="object-contain rounded-full"
                              />

                              <div className='' >
                                    <p className='font-bold text-16' >Bạn đã được đăng nhập</p>
                                    <p className='text-14 text-slate-600' >nguyenminhtri.vnpt2@gmail.com</p>
                              </div>
                        </div>

                        <div className='Booking__content__right__child items-start p-5 mb-5 border rounded-md w-full flex flex-col gap-3' >
                                <p className='text-xl font-semibold' >Nhập thông tin chi tiết của bạn</p>
                                <div className='w-full flex flex-wrap gap-5 border-b pb-5' >
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

                                <p className='font-bold text-16' >Bạn đặt phòng cho ai?</p>

                                <div className='w-full border-b pb-5' >
                                      <div className='flex items-center gap-1 w-full mb-1' >
                                           <input type="radio" name="type" id="type" />
                                           <p>Tôi là khách lưu trú chính</p>
                                      </div>

                                      <div className='flex items-center gap-1' >
                                           <input type="radio" name="type" id="type" />
                                           <p>Đặt phòng này là cho người khác</p>
                                      </div>
                                </div>
                       </div>

                       <div className='Booking__content__right__child items-start p-5 mb-5 border rounded-md w-full flex flex-col gap-3' >
                                <p className='text-xl font-semibold' >Thêm vào kỳ nghỉ</p>
                                <div className='w-full gap-5 border-b pb-5' >
                                     <div className='border-b py-2'>
                                         <CheckboxComponent>
                                                Cho thuê xe đạp dành cho khách của Booking.com (tùy thuộc nếu còn đủ xe)
                                         </CheckboxComponent>
                                     </div>

                                     <div className='border-b py-2'>
                                          <div className='flex items-start justify-between' >
                                                <div className='w-[80%]' >
                                                      <CheckboxComponent>
                                                            Tôi muốn thuê một chiếc xe<br></br>
                                                      </CheckboxComponent>
                                                      <p className='text-12 ml-[25px]' >Đừng bỏ lỡ những điểm tuyệt vời của chuyến đi - xem các lựa chọn thuê xe trong xác nhận đặt phòng.</p>
                                                </div> 
                                                
                                                <Car size="32" color="black"/>
                                          </div>   
                                     </div>

                                     <div className='border-b py-2'>
                                          <div className='flex items-start justify-between' >
                                                <div className='w-[80%]' >
                                                      <CheckboxComponent>
                                                      Bạn muốn đặt trước taxi hoặc xe đưa đón?<br></br>
                                                      </CheckboxComponent>
                                                      <p className='text-12 ml-[25px]' >Hãy tránh những điều bất ngờ - đi từ sân bay đến chỗ nghỉ một cách thuận lợi. 
                                                         Chúng tôi sẽ thêm lựa chọn taxi vào xác nhận đặt phòng của bạn.
                                                      </p>
                                                </div> 
                                                
                                                <Car size="32" color="black"/>
                                          </div>   
                                     </div>
                                </div>
                       </div>

                       <div className='Booking__content__right__child items-start p-5 mb-5 border rounded-md w-full flex flex-col gap-3' >
                                <p className='text-xl font-semibold' >Các Yêu Cầu Đặc Biệt</p>
                                <p className='text-14' >Các yêu cầu đặc biệt không đảm bảo sẽ được đáp ứng – tuy nhiên, 
                                   chỗ nghỉ sẽ cố gắng hết sức để thực hiện. Bạn luôn có thể gửi yêu 
                                   cầu đặc biệt sau khi hoàn tất đặt phòng của mình!
                                </p>

                                <label className='font-bold text-14' htmlFor="">Vui lòng ghi yêu cầu của bạn bằng tiếng Anh. <span className='font-extralight' >(không bắt buộc)</span></label>
                                <textarea className='border w-full p-3' name="" id=""></textarea>
                       </div>

                       <div className='Booking__content__right__child items-start p-5 mb-5 border rounded-md w-full flex flex-col gap-3' >
                               <div className='flex items-center gap-2' >
                                    <TickCircle size="25" color="green"/>
                                    <p className='text-14' >Phòng của bạn sẽ sẵn sàng để nhận vào lúc 16:00</p>
                               </div>
                               <div className='flex items-center gap-2' >
                                    <TickCircle size="25" color="green"/>
                                    <p className='text-14' >Lễ tân 24 giờ - Luôn có trợ giúp mỗi khi bạn cần!</p>
                               </div>

                               <div>
                                    <label className='font-bold' htmlFor="">Thêm thời gian đến dự kiến của bạn <span className='font-light' >(không bắt buộc)</span></label>
                                    <select className='border border-black rounded-md w-full p-2' name="" id="" />
                               </div>
                       </div>

                       <div className='w-1/3 ml-auto' >
                              <ButtonBlue>
                                  Tiếp tục
                              </ButtonBlue>
                       </div>
                 </div>
            </div>
        </div>
    )
}

export default BookCheckout
