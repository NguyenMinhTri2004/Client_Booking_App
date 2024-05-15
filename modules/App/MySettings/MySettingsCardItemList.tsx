
import Image from 'next/image';
import MySettingsCardItem from './MySettingsCardItem';

const MySettingsCardItemList = (props : any) => {
    return (
        <div className='MySettingsCardItemList flex items-center gap-5 flex-wrap justify-center'>
                <MySettingsCardItem/>
                <MySettingsCardItem/>
                <MySettingsCardItem/>
                <MySettingsCardItem/>
                <MySettingsCardItem/>
                <MySettingsCardItem/>
        </div>
    )
}

export default MySettingsCardItemList