
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';
import { Button } from 'antd/lib';
import { ButtonBlue , ButtonTransparent } from "@/common/components/Button";
import { DatePicker, Space } from 'antd/lib';
import { Select} from 'antd/lib';
const { RangePicker } = DatePicker;
import MiniMap from '@/common/components/Map/MiniMap';


const MyWishlist = (props : any) => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <Section>
            <SectionBody>
            <div className='flex items-center gap-3' >
                <p>Đã lưu</p>
                <div>
                   <ButtonBlue>Cho chuyến đi sắp tới của tôi</ButtonBlue>
                </div>
                <div>
                    <ButtonBlue>Chia sẻ danh sách</ButtonBlue>
                </div> 
                <div>
                   <ButtonBlue>Tạo danh sách</ButtonBlue>
                </div>
                
            </div>

            <div className='flex items-center justify-between border p-5 mt-5' >
                 <div>
                     <p className='text-3xl font-bold' >Cho chuyến đi sắp tới của tôi</p>
                     <div className='flex items-center gap-3' >
                         <p>Đã lưu 2 chỗ nghỉ</p>
                         <Space direction="vertical" size={12}>
                            <RangePicker />
                         </Space>

                         <Space wrap>
                           <Select
                                defaultValue="lucy"
                                style={{ width: 120 }}
                                allowClear
                                options={[{ value: 'lucy', label: 'Lucy' }]}
                                />
                         </Space>
                     </div>
                 </div>

                <div className="w-[20%]" >
                       <MiniMap/>
                </div>
                 
            </div>
            </SectionBody>
           
        </Section>
    )
}

export default MyWishlist
