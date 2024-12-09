import { ButtonBlue } from '@/common/components/Button';
import React, { useEffect, useState, useCallback } from 'react';
import { Wifi, ArrowDown2 } from "iconsax-react";
import Image from 'next/image';
import CheckboxComponent from '@/common/components/Checkbox';
import { Car } from 'iconsax-react';
import { formatCurrency, handleApi } from '@/common/utils';
import { calculateDateDifference } from '@/common/utils';
import { Input, Button } from 'antd/lib';
import { orderByUser, orderReview } from '@/common/api/order';
import Head from 'next/head';

interface BookCheckoutProps {
    roomType: any;
    detailAccommodation: any;
    room: any;
    codeList: string[];
    setCodeList: (codes: string[]) => void;
}

const BookCheckout: React.FC<BookCheckoutProps> = React.memo(({roomType, detailAccommodation, room, codeList, setCodeList }) => {
    const [code, setCode] = useState("");
    const [dataOrder, setDataOrder] = useState<any>({});

    const handleUpdateOrder = useCallback(async (codeList: string[]) => {
        const data: any = await handleApi(orderReview(false, {
            userId: "661550683160",
            orders: [
                {
                    ownerId: "661550683160",
                    codes: codeList,
                    ownerDiscounts: [{ type: "percentage", value: 10 }],
                    orderItems: [{ name: `${detailAccommodation?.name} - ${roomType?.name}`, price: roomType?.price, quantity: room?.quantity }]
                }
            ]
        }));
        if (data.success) {
            setDataOrder(data.metadata);
        }
    }, [detailAccommodation, roomType, room]);

    const handleApplyVoucher = useCallback(() => {
        if (code === "") {
            alert("Vui lòng nhập voucher");
            return;
        }
        if (codeList.includes(code)) {
            alert("Đã sử dụng rồi");
            return;
        }
        const updatedCodeList = [...codeList, code];
        setCodeList(updatedCodeList);
        setCode("");
        handleUpdateOrder(updatedCodeList);
    }, [code, codeList, handleUpdateOrder, setCodeList]);


    const handlePayment = async () => {
      // setState(prev => ({ ...prev, loading: true }));
      try {
          const response:any = await handleApi(orderByUser (false, {
              amount: dataOrder?.checkoutOrder?.totalPrice,
              orderInfo: JSON.stringify({ name: "minh tri", age: 69 }),
              returnUrl: `${window.location.origin}/book`,
              ipAddr: '127.0.0.1',
              bankCode: "NCB"
          }));
          if (response.success) {
              const paymentUrl = response.metadata?.paymentUrl;
              if (paymentUrl) {
                  window.location.href = paymentUrl;
              }
          }
      } catch (err) {
          console.error('Payment error:', err);
      } finally {
      //     setState(prev => ({ ...prev, loading: false }));
      }
    };

    useEffect(() => {
        handleUpdateOrder([]);
    }, [roomType, detailAccommodation, handleUpdateOrder]);

    return (
        <>
            <Head>
                <title>Book Checkout - {detailAccommodation?.name}</title>
                <meta name="description" content={`Checkout for ${detailAccommodation?.name} with room type ${roomType?.name}.`} />
                <link rel="canonical" href={`https://yourwebsite.com/book/checkout`} />
            </Head>
            <div className='Booking'>
                <div className='Booking__content flex flex-col lg:flex-row items-start mt-5 gap-5'>
                    <div className='Booking__content__left w-full lg:w-[35%] h-screen overflow-y-scroll'>
                        <div className='Booking__content__left__child mb-4 border rounded-md p-5 flex flex-col gap-1'>
                            <div className='flex items-start gap-3'>
                                <p className='text-12'>Khách sạn</p>
                            </div>
                            <div>
                                <p className ='font-bold'>{detailAccommodation?.name}</p>
                            </div>
                            <p>{roomType?.name}</p>
                            <p className='text-12 text-green-700'>Vị trí xuất sắc — 9.3</p>
                            <div className='flex text-12 font-light items-center gap-2'>
                                <span className='p-1 bg-primary-blue text-12 h-6 w-6 flex items-center justify-center text-white'>9.1</span>
                                <p>Tuyệt hảo</p>
                                <p>1.748 đánh giá</p>
                            </div>
                            <ul className='flex items-center gap-3 flex-wrap'>
                                {roomType?.convenients?.map((convenient: any, index: number) => (
                                    <li key={index} className='flex items-center gap-2'>
                                        <p className='text-12'>{convenient}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='Booking__content__left__child border mb-4 rounded-md p-5 flex flex-col gap-1'>
                            <div>
                                <p className='font-bold'>Chi tiết đặt phòng của bạn</p>
                            </div>
                            <div className='flex items-start gap-16'>
                                <div className='w-[35%]'>
                                    <p className='text-14'>Nhận phòng</p>
                                    <div>
                                        <p className='font-bold'>{room?.dateStart}</p>
                                    </div>
                                </div>
                                <div className='w-[35%]'>
                                    <p className='text-14 pl-5'>Trả phòng</p>
                                    <div className='border-l pl-5'>
                                        <p className='font-bold'>{room?.dateEnd}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 border-b pb-3'>
                                <p className='text-14'>Tổng thời gian lưu trú:</p>
                                <p className='font-bold text-14'>{calculateDateDifference(room?.dateStart, room?.dateEnd)} ngày</p>
                            </div>
                            <div className='mt-4 flex items-center justify-between'>
                                <div>
                                    <p className='text-14'>Bạn đã chọn</p>
                                    <p className='font-bold text-16'>{room?.quantity} phòng cho {roomType?.adult} người lớn {roomType?.children > 0 && `và ${roomType?.children} trẻ nhỏ`}</p>
                                </div>
                            </div>
                            <div>
                                <p className='font-bold text-14 cursor-pointer mt-5 text-primary-blue'>Đổi lựa chọn của bạn</p>
                            </div>
                        </div>
                        <div className='Booking__content__left__child mb-4 border rounded-md p-5 flex flex-col gap-1'>
                            <div>
                                <p className='font-bold'>Tóm tắt giá</p>
                            </div>
                            <div className='flex items-start justify-between text-14'>
                                <p>Giá gốc</p>
                                {dataOrder?.checkoutOrder?.totalPrice && (
                                    <p>VND {formatCurrency(dataOrder?.checkoutOrder?.totalPrice)}</p>
                                )}
                            </div>
                            <div className='flex items-start justify-between text-14'>
                                <div className="flex items-center justify-between w-full">
                                    <p>Giảm giá</p>
                                    {dataOrder?.checkoutOrder?.totalVoucher && (
                                        <p className='w-1/2 text-end'> - VND {formatCurrency(dataOrder?.checkoutOrder.totalVoucher)}</p>
                                    )}
                                </div>
                            </div>
                            <div className='flex items-start justify-between text-14'>
                                <div>
                                    <p>Giảm giá Genius</p>
                                    <p className='text-12 w-[75%]'>Bạn nhận được giảm giá vì bạn là thành viên Genius.</p>
                                </div>
                                <p className='w-1/2 text-end'>- VND 26.584.806</p>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <Input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Apply Voucher" />
                                <Button onClick={handleApplyVoucher} className="cursor-pointer" type="primary" loading={false}>
                                    Apply
                                </Button>
                            </div>
                        </div>
                        <div className ='flex items-end justify-between text-14 p-5 border rounded-md bg-[#EBF3FF]'>
                            <p className='font-bold text-2xl'>Giá</p>
                            <div className='text-end'>
                                <del className='text-16 text-red-600'>VND 265.848.060</del>
                                {dataOrder?.checkoutOrder?.totalOrder && (
                                    <p className='font-bold text-2xl'> VND {formatCurrency(dataOrder?.checkoutOrder?.totalOrder)}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='Booking__content__right w-full lg:w-[70%]'>
                        <div className='Booking__content__right__child flex items-center gap-2 p-5 mb-5 border rounded-md w-full'>
                            <Image
                                src="/images/BannerHome01.png"
                                alt="User  Profile"
                                width="100"
                                height="100"
                                className="object-contain rounded-full"
                            />
                            <div>
                                <p className='font-bold text-16'>Bạn đã được đăng nhập</p>
                                <p className='text-14 text-slate-600'>nguyenminhtri.vnpt2@gmail.com</p>
                            </div>
                        </div>

                        <div className='Booking__content__right__child items-start p-5 mb-5 border rounded-md w-full flex flex-col gap-3'>
                            <p className='text-xl font-semibold'>Nhập thông tin chi tiết của bạn</p>
                            <div className='w-full flex flex-wrap gap-5 border-b pb-5'>
                                <div className='flex flex-col md:w-[48%] w-full'>
                                    <label className='text-14 font-bold'>Họ (tiếng Anh)<span className='text-red-500'>*</span></label>
                                    <input className='border border-black rounded-md w-full p-2' type="text" />
                                </div>
                                <div className='flex flex-col md:w-[48%] w-full'>
                                    <label className='text-14 font-bold'>Tên (tiếng Anh)<span className='text-red-500'>*</span></label>
                                    <input className='border border-black rounded-md w-full p-2' type="text" />
                                </div>
                                <div className='flex flex-col md:w-[48%] w-full'>
                                    <label className='text-14 font-bold'>Địa chỉ email<span className='text-red-500'>*</span></label>
                                    <input className='border border-black rounded-md w-full p-2' type="text" />
                                </div>
                            </div>

                            <p className='font-bold text-16'>Địa chỉ của bạn</p>
                            <div className='w-full flex flex-wrap gap-5 border-b pb-5'>
                                <div className='flex flex-col md:w-[48%] w-full'>
                                    <label className='text-14 font-bold'>Địa chỉ<span className='text-red-500'>*</span></label>
                                    <input className='border border-black rounded-md w-full p-2' type="text" />
                                </div>
                                <div className='flex flex-col md:w-[48%] w-full'>
                                    <label className='text-14 font-bold'>Thành phố <span className='text-red-500'>*</span></label>
                                    <input className='border border-black rounded-md w-full p-2' type="text" />
                                </div>
                               
                               
                                <div className='flex flex-col md:w-[48%] w-full'>
                                    <label className='text-14 font-bold'>Điện thoại (ưu tiên số ĐTDĐ)<span className='text-red-500'>*</span></label>
                                    <input className='border border-black rounded-md w-full p-2' type="text" />
                                </div>
                            </div>
                        </div> 
{/*                         
                        <div className='Booking__content__right__child items-start p-5 mb-5 border rounded-md w-full flex flex-col gap-3'>
                            <p className='text-xl font-semibold'>Thêm vào kỳ nghỉ</p>
                            <div className='w-full gap-5 border-b pb-5'>
                                <div className='border-b py-2'>
                                    <CheckboxComponent>
                                        Cho thuê xe đạp dành cho khách của Booking.com (tùy thuộc nếu còn đủ xe)
                                    </CheckboxComponent>
                                </div>
                                <div className='border-b py-2'>
                                    <div className='flex items-start justify-between'>
                                        <div className='w-[80%]'>
                                            <CheckboxComponent>
                                                Tôi muốn thuê một chiếc xe<br />
                                            </CheckboxComponent>
                                            <p className='text-12 ml-[25px]'>Đừng bỏ lỡ những điểm tuyệt vời của chuyến đi - xem các lựa chọn thuê xe trong xác nhận đặt phòng.</p>
                                        </div>
                                        <Car size="32" color="black" />
                                    </div>
                                </div>
                                <div className='border-b py-2'>
                                    <div className='flex items-start justify-between'>
                                        <div className='w-[80%]'>
                                            <CheckboxComponent>
                                                Bạn muốn đặt trước taxi hoặc xe đưa đón?<br />
                                            </CheckboxComponent>
                                            <p className='text-12 ml-[25px]'>Hãy tránh những điều bất ngờ - đi từ sân bay đến chỗ nghỉ một cách thuận lợi. Chúng tôi sẽ thêm lựa chọn taxi vào xác nhận đặt phòng của bạn.</p>
                                        </div>
                                        <Car size="32" color="black" />
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className='Booking__content__right__child items-start p-5 mb-5 border rounded-md w-full flex flex-col gap-3'>
                            <p className='text-xl font-semibold '>Các Yêu Cầu Đặc Biệt</p>
                            <p className='text-14'>Các yêu cầu đặc biệt không đảm bảo sẽ được đáp ứng – tuy nhiên, chỗ nghỉ sẽ cố gắng hết sức để thực hiện. Bạn luôn có thể gửi yêu cầu đặc biệt sau khi hoàn tất đặt phòng của mình!</p>
                            <label className='font-bold text-14' htmlFor="">Vui lòng ghi yêu cầu của bạn bằng tiếng Anh. <span className='font-extralight'>(không bắt buộc)</span></label>
                            <textarea className='border w-full p-3' name="" id=""></textarea>
                        </div> */}

                        {/* <div className='Booking__content__right__child items-start p-5 mb-5 border rounded-md w-full flex flex-col gap-3'>
                            <div>
                                <label className='font-bold' htmlFor="">Thêm thời gian đến dự kiến của bạn <span className='font-light'>(không bắt buộc)</span></label>
                                <select className='border border-black rounded-md w-full p-2' name="" id="" />
                            </div>
                        </div> */}

                        <div className='flex flex-col md:flex-row items-center justify-end gap-4'>
                            <div onClick={handlePayment} className='w-full md:w-1/4 flex justify-center md:justify-end'>
                                <ButtonBlue>
                                    Tiếp tục
                                </ButtonBlue>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default BookCheckout;