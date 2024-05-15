import { ButtonBlue } from "../Button"
import { Location } from "iconsax-react"

const MiniMap = (props : any) => {
    return (
        <div className='flex items-center justify-center flex-col h-32 border bg-miniMap rounded-md w-full mb-1 gap-3' >
             <Location size="32" color="blue" variant="Bold"/>
             <div className="w-[60%]" >
                <ButtonBlue>
                    Hiển thị trên bản đồ
                </ButtonBlue >
             </div>
              
        </div>
    )
}

export default MiniMap