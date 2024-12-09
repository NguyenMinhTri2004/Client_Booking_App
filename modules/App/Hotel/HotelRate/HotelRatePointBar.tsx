
const HotelRatePointBar = ({name, point}:any) => {
    return (
        <div className="flex flex-col items-start w-[30%]" >
            <div className="flex items-center justify-between w-full mb-1" >
                    <p className="font-bold text-sm" >{name}</p>
                    <p className="font-bold text-sm">{point}</p>
            </div>

            <div className="h-2 w-full bg-blue-700 rounded-md" >

            </div>
        </div>
    )
}

export default HotelRatePointBar
