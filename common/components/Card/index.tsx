
import Image from 'next/image';
import Link from 'next/link';

interface CardData {
    slug: string;
    name: string;
    images: string[];
    rate: string;
    pricePerDay: number;
}

interface CardItemProps {
    data: CardData;
}

const CardItem : React.FC<CardItemProps> = ({ data }) => {
    console.log("Card Item" , data);

    const imageUrl = data?.images?.length > 0 ? data?.images[0]: "/path/to/default/image.jpg"; 

    return (
        <div  className='cursor-pointer shadow-lg rounded-lg w-[265px] overflow-hidden bg-white'>
            <Link href = {`hotel/${data?.slug}`}>
                <div className = "h-full w-full">
                    <div className="relative" >
                        <Image
                                src={imageUrl}
                                alt="Picture of the author"
                                width="400"
                                height="300"
                                className="w-full object-cover"
                        />
                        <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                                    <i className="fas fa-heart text-gray-500"></i>
                        </button>

                    </div>

                <div className='p-3'>
                    <p className='text-base font-bold mt-2' >{data?.name}</p>
                    <p className='tex-sm font-light mb-2'  >Card content Card content Card content</p>
                    <div className='flex items-center gap-2' >
                        <span className='bg-blue-600 py-1 px-2 text-white rounded-sm text-[12px]' >{data?.rate}</span>
                        <div className='text-[12px]' >Nice</div>
                        <p className='text-xs' >6969 reviews</p>
                    </div>

                    <div className='right-0 mt-[3rem] flex items-end justify-end w-full' >
                        <p>Price<b> VND {data?.pricePerDay}</b ></p>
                    </div>
                </div>
                </div>
            </Link>
        </div>
    )
}

export default CardItem