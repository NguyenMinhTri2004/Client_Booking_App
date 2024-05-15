import Image from "next/image"


const Banner = (props : any) => {
    return (
        <div className="flex items-center justify-center" >
            <Image
                    src="/images/BannerHome01.png"
                    alt="Picture of the author"
                    width="400"
                    height="50"
                    className="object-contain"
            />
        </div>
        
    )
}

export default Banner