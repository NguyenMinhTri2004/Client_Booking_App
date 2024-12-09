import React from 'react';
import Image from 'next/image';
import { Check } from 'iconsax-react'; // Import an icon for success indication
import Head from 'next/head';

const BookDetail = () => {
    return (
        <>
            <Head>
                <title>Đặt hàng thành công</title>
                <meta name="description" content="Đơn hàng của bạn đã được đặt thành công. Vui lòng kiểm tra email của bạn để biết thêm thông tin." />
                <meta property="og:title" content="Đặt hàng thành công" />
                <meta property="og:description" content="Đơn hàng của bạn đã được đặt thành công. Vui lòng kiểm tra email của bạn để biết thêm thông tin." />
                <meta property="og:image" content="/images/thank-you.png" />
                <meta property="og:url" content="https://yourwebsite.com/book-detail" />
            </Head>
            <main className='Booking__content w-full flex flex-col lg:flex-row items-start mt-5 gap-5'>
                <section className='Booking__content__right w-full lg:w-full p-5 border rounded-md shadow-md'>
                    <div className='flex items-center mb-4'>
                        <Check style={{ fontSize: '32px', color: 'green' }} />
                        <h1 className='text-xl font-bold ml-2'>Đặt hàng thành công!</h1>
                    </div>
                    <p className='text-lg'>Đơn hàng của bạn đã được đặt thành công. Vui lòng kiểm tra email của bạn để biết thêm thông tin.</p>
                    
                    <div className='mt-5'>
                        <h2 className='text-lg font-semibold'>Chi tiết đơn hàng:</h2>
                        <ul className='list-disc ml-5'>
                            <li><strong>Khách sạn:</strong> Khách sạn ABC</li>
                            <li><strong>Loại phòng:</strong> Phòng Deluxe</li>
                            <li><strong>Ngày nhận phòng:</strong> 01/01/2024</li>
                            <li><strong>Ngày trả phòng:</strong> 05/01/2024</li>
                            <li><strong>Tổng giá:</strong> VND 2,000,000</li>
                        </ul>
                    </div>

                    <div className='mt-5'>
                        <h2 className='text-lg font-semibold'>Tiếp theo:</h2>
                        <p className='text-md'>Bạn có thể:</p>
                        <ul className='list-disc ml-5'>
                            <li>Kiểm tra email của bạn để xác nhận đặt phòng.</li>
                            <li>Quay lại trang chủ để tìm kiếm thêm chỗ ở.</li>
                        </ul>
                    </div>

                    <div className='mt-5 flex justify-center'>
                        <Image
                            src="/images/thank-you.png" // Replace with your image path
                            alt="Thank You"
                            width={300}
                            height={200}
                            layout="responsive" // Use responsive layout
                            loading="lazy" // Lazy load the image
                            className="object-contain"
                        />
                    </div>
                </section>
            </main>
        </>
    );
}

export default BookDetail;