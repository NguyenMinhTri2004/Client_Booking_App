
import Image from 'next/image';
import MySettingsCardItem from './MySettingsCardItem';

const MySettingsCardItemList = ({data}:any) => {
    console.log("Data from MySettingsCardItem" , data)
    return (
        <div className='MySettingsCardItemList flex items-center gap-5 flex-wrap justify-center'>
            {
                data.map((item:any, index:any) => (
                    <MySettingsCardItem key={index} data={item} />
                ))
            }
        </div>
    )
}

export default MySettingsCardItemList