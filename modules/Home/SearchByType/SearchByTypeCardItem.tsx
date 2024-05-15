import Image from 'next/image';
import Link from 'next/link';


const SearchByTypeCardItem = () => {
  return (
    <div>
        <Image
                src="/images/BannerHome01.png"
                alt="Picture of the author"
                width="400"
                height="50"
                className="object-contain"
        />
        <b>Vung tau</b>
    </div>
)
};

export default SearchByTypeCardItem ;
