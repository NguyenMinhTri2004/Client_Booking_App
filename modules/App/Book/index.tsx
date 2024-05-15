import { Button, message, Steps, theme } from 'antd/lib';
import React, { useState } from 'react';
import BookDetail from './BookDetail';
import BookCheckout from './BookCheckout';

const steps = [
    {
      title: 'Bạn chọn',
      content: 'First-content',
    },
    {
      title: 'Chi tiết về bạn',
      content: <BookDetail/>,
    },
    {
      title: 'Bước cuối cùng',
      content: <BookCheckout/>,
    },
  ];

const Book = (props : any) => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const contentStyle: React.CSSProperties = {
    //   lineHeight: '260px',
    //   textAlign: 'center',
      color: token.colorTextTertiary,
    //   backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
    //   border: `1px dashed ${token.colorBorder}`,
      marginTop: 16,
    };

    return (
        <div className='Booking flex items-center justify-center' >
            <div className='Booking__step w-[80%]' >
                <Steps style = {contentStyle} current={current} items={items} />
                <div>{steps[current].content}</div>
                <div style={{ marginTop: 24 }}>
                    {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                    )}
                    {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                    )}
                    {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                    )}
              </div>
            </div>
        </div>
    )
}

export default Book
