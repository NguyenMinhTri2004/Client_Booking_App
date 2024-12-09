import Search from '@/common/components/Search';
import SearchHistory from './SearchHistory';
import Discount from './Discount';
import Banner from './Banner';
import Favorite from './Favorite';
import Explore from './Explore';
import Unique from './Unique';
import SearchByType from "./SearchByType";
import Genius from './Genius';
import Trending from './Trending';
import TrendingListByType from './TrendingListByType';
import FavoriteByLocation from './FavoriteByLocation';
import BannerComponent from '@/common/components/Banner';
import { getListAccommodation} from '@/common/api/accommodation';
import React, {useEffect, useState } from 'react';
import { handleApi } from '@/common/utils';
import Loading from '@/common/components/Loading';
import { getAllEndow } from '@/common/api/Strapi/endow';
import { getAllBanner } from '@/common/api/Strapi/banner';
import { useAuthStore } from '@/zustand/auth/store';
import Section from "@/common/components/Section"
import SectionBody from '@/common/components/Section/SectionBody';
interface Accommodation {
  // Define the properties of an accommodation object here
  name : string;
}

const Home = () => {
  const [accommodationList, setAccommodationList] = useState<any>([])
  const [listEndow, setListEndow] = useState([])
  const [listBanner, setListBanner] = useState([])
  const [loading, setLoading] = useState(false)
  const changeMode = useAuthStore(state => state?.changeMode)

  useEffect(() => {
    setLoading(true)
    // changeMode(false)
    getListAccommodation()
    .then(({ data }) => {
      console.log("Accommodation", data);
      setAccommodationList(data.metadata)
      console.log("Ac", data.metadata)
    })
    .catch((error) => {
      console.error("Error fetching accommodation", error);
    });

    getAllEndow()
    .then(({ data }) => {
      console.log("Endow", data);
      setListEndow(data?.data)
    })
    .catch((error) => {
      console.error("Error fetching endow", error);
    });

    getAllBanner()
    .then(({ data }) => {
      console.log("Endow", data);
      setListBanner(data?.data)
    })
    .catch((error) => {
      console.error("Error fetching endow", error);
    });
    setLoading(false)
  console.log("Ac2", accommodationList)
  }, [accommodationList.length]);

  return (
        
        <div className='mt-[125px] relative' >
            {loading && <Loading/>}
             <SectionBody className = "relative" >
                <BannerComponent data = {listBanner}/>
                <Search/>
             </SectionBody>
             <SearchHistory/>
             <Discount data = {listEndow}/>
             <Banner/>
             <Favorite data = {accommodationList}/>
             <Explore/>
             <Unique/>
             <SearchByType/>
             <Genius/>
             <Trending/>
             <TrendingListByType/>
             <FavoriteByLocation/>
        </div>
  );
};

export default Home;
