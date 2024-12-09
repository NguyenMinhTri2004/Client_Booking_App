import { ButtonBlue } from "../Button";
import { Location } from "iconsax-react";

interface MiniMapProps {
    setOpen: (value: boolean) => void;
}

const MiniMap: React.FC<MiniMapProps> = ({ setOpen }) => {
    return (
        <div className='flex items-center justify-center flex-col h-32 border bg-miniMap rounded-md w-full mb-1 gap-3'>
             <Location size="32" color="blue" variant="Bold"/>
             <div onClick={() => setOpen(true)}  className="w-[60%]">
                <ButtonBlue >
                    Hiển thị trên bản đồ
                </ButtonBlue>
             </div>              
        </div>
    );
};

export default MiniMap;
