
import Image from 'next/image';
import Link from 'next/link';

const MySettingsCardItem = ({data}:any) => {

    console.log("Data from card item" , data)
    return (
        <Link className = "w-[45%]" href = {`/mysettings/personal/${data?.id}`} >
            <div className='MySettingsCardItem flex items-start gap-3 border rounded-md p-5 cursor-pointer w-full hover:text-blue-500' >
            
                    <div className='MySettingsCardItem__left bg-slate-100 rounded-full p-2' >
                        <Image
                            src= {`${process.env.NEXT_PUBLIC_API_STRAPI_HOST}${data?.attributes?.Icon?.data?.attributes?.url}`}
                            alt="Picture of the author"
                            width="25"
                            height="25"
                            className="object-contain  rounded-full "
                        />
                    </div>

                    <div className='MySettingsCardItem__right' >
                        <p className = "text-xl font-bold" >{data?.attributes?.
    Title}</p>
                        <p className = "text-14" >{data?.attributes?.Description}</p>
                        <a className='text-primary-blue text-14 hover:underline' href="">{data?.attributes?.TextLink}</a>
                    </div>
            
            </div>
        </Link>
    )
}

export default MySettingsCardItem