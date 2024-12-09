import Image from "next/image"
import { ButtonBlue } from "@/common/components/Button";

const DiscountCardItem = ({data} : any) => {
    console.log("Data from discountItem", data)
    const imageUrl = data?.attributes?.Image?.data?.attributes?.formats?.large?.url;
    const backgroundImage = imageUrl
    ? `url(${process.env.NEXT_PUBLIC_API_STRAPI_HOST}${imageUrl})`
    : '';
    return (
        <div className="relative h-[150px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage }} >
                {/* <Image width= '1000' height={200}  alt="Picture of the author" src = {``}/> */}
                <div className="absolute inset-0 flex items-left justify-left bg-black bg-opacity-60 p-4">
                <div className="text-left w-full text-white">
                    <h1 className="text-xl font-bold mb-2">{data?.attributes?.Title}</h1>
                    <p className="text-sm">{data?.attributes?.SubTitle}</p>
                    <div className = "w-1/4 mt-3" > 
                        <ButtonBlue>
                            <p>{data?.attributes?.TextButton}</p>
                        </ButtonBlue>
                    </div>
                </div>
      </div>
        </div>
    )
}

export default DiscountCardItem