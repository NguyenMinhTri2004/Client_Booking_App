import Image from 'next/image';
import Link from 'next/link';
import { Button } from "antd/lib";
import { Input } from 'antd/lib';
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
const Home = () => {
  return (
        <div className='mt-[125px]' >
             <BannerComponent/>
             <SearchHistory/>
             <Discount/>
             <Banner/>
             <Favorite/>
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
