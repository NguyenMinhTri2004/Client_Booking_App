
const HotelServiceItem = ({title, detail }:any) => {

    return (
        <span className="mx-5 border border-blue-500  p-3 cursor-pointer shadow-md outline-none flex flex-col">
        {
            title &&  <p className="font-bold" >{title}</p>
        }
       
        <p className="text-sm" >
            {
                detail &&  <p>{detail}</p>
            }
        </p>
        
        </span>
    )
}

export default HotelServiceItem
