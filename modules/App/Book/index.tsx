import { Button, message, Steps, theme } from 'antd/lib';
import React, { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { handleApi } from '@/common/utils';
import { orderReview, orderByUser  } from '@/common/api/order';
import { getAccommodationBySlug } from "@/common/api/accommodation";
import { getDetailRoomType } from '@/common/api/roomType';
import Cookies from 'js-cookie';
import Head from 'next/head';

const BookDetail = dynamic(() => import('./BookDetail'));
const BookCheckout = dynamic(() => import('./BookCheckout'));

interface OrderItem {
    name: string;
    price: number;
    quantity: number;
}

interface Order {
    ownerId: string;
    codes: string[];
    ownerDiscounts: { type: string; value: number }[];
    orderItems: OrderItem[];
}

interface Accommodation {
    name: string;
    // Add other properties as needed
}

interface RoomType {
    name: string;
    price: number;
    // Add other properties as needed
}

interface State {
    current: number;
    detailAccommodation: any ;
    roomType: any;
    codeList: string[];
    amount: number;
    loading: boolean;
}

const Book: React.FC = () => {
    const { token } = theme.useToken();
    const [state, setState] = useState<State>({
        current: 1,
        detailAccommodation:{},
        roomType: {},
        codeList: [],
        amount: 100000,
        loading: false,
    });
    const router = useRouter();
    const slug = router.query;
    const userId = Cookies.get('userId');

    const handleGetData = useCallback(async () => {
        console.log("slug" , slug)
        try {
            const slugAccommodation = slug.accommodation as string;
            const accommodation:any = await handleApi(getAccommodationBySlug(false, slugAccommodation));
            if (accommodation.success) {
                setState(prev => ({ ...prev, detailAccommodation: accommodation.metadata }));
                const roomType:any = await handleApi(getDetailRoomType(false, {
                    accommodationSlug: slug?.accommodation as string,
                    name: slug?.room as string
                }));
                if (roomType.success) {
                    console.log("accomodation" , state.detailAccommodation)
                    setState(prev => ({ ...prev, roomType: roomType.metadata }));        
                }
            }
        } catch (error) {
            console.error('handleGetAPI error', error);
        }
        console.log(state.detailAccommodation)
        console.log(state.roomType)
    }, [slug, state?.roomType?.name, state?.detailAccommodation?.name]);

    

    

    const next = () => {
        setState(prev => ({ ...prev, current: prev.current + 1 }));
    };

    const steps = [
        { title: 'Bạn chọn', content: 'First-content' },
        { title: 'Chi tiết về bạn', content: <BookCheckout  room={slug} roomType={state.roomType} detailAccommodation={state.detailAccommodation} codeList={state.codeList} setCodeList={(codes:State["codeList"]) => setState(prev => ({ ...prev, codeList: codes }))}/> },
        { title: 'Bước cuối cùng', content: <BookDetail/> },
    ];

    useEffect(() => {
        handleGetData();
        if (slug?.vnp_Amount) {
            next();
        }
    }, [slug]);

    const items = steps.map(item => ({ key: item.title, title: item.title }));

    const contentStyle = {
        color: token.colorTextTertiary,
        borderRadius: token.borderRadiusLG,
        marginTop: 16,
    };

    return (
        <>
            <Head>
                <title>Book Your Stay</title>
                <meta name="description" content="Book your accommodation and enjoy a comfortable stay." />
                <link rel="canonical" href={`https://yourwebsite.com/book/${slug}`} />
            </Head>
            <div className='Booking flex items-center justify-center'>
                    <div className='Booking__step w-[80%]'>
                        <Steps style={contentStyle} current={state.current} items={items} />
                        <div>{steps[state.current]?.content}</div>
                    </div>
                {state.loading && <div>Loading...</div>}
            </div>
        </>
    );
};

export default Book;