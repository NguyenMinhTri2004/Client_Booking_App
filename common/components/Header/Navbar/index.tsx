import { ButtonWhite } from '../../Button';
import Image from 'next/image';
import Link from 'next/link';
import React, { memo, useState } from 'react';
import { NavbarData } from './NavbarData';
import { MessageQuestion } from 'iconsax-react';

interface NavBarProps {
  isShowToggleTheme: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isShowToggleTheme = true }) => {
  const [navbar, setNavbar] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);


  return (
    <div className="w-full mx-auto text-white ">
      <nav className=" md:py-5 fixed py-2 px-4 h-fit w-full flex-col bg-primary-blue right-0 left-0 z-20 flex items-center justify-between">
         <div className='navbar__top flex items-center justify-between md:w-[80%] xs:w-full '>
              <div className='navbar__top__logo' >
                  <p className="navbar__top__logo__text text-2xl font-bold cursor-pointer" >TBooking</p>
              </div>

              <div className='navbar__top__list flex items-center gap-7 text-white font-bold ' >
                    <p className='navbar__top__list__item cursor-pointer' >VND</p>
                    <Image  src="/images/vietnamFlag.png"
                        alt="Picture of the author"
                        width="25"
                        height="25" 
                        className='navbar__top__list__item cursor-pointer rounded-full'
                    />
                    <div className='navbar__top__list__item cursor-pointer' >
                          <MessageQuestion size="25" color="white"/>
                    </div>
                    <div className='navbar__top__list__item cursor-pointer'>Đăng chỗ nghỉ của quý vị</div>
                    <ButtonWhite className='navbar__top__list__item rounded-md'>Đăng ký</ButtonWhite>
                    <ButtonWhite className='navbar__top__list__item'>Đăng nhập</ButtonWhite>
              </div>
         </div>

         <div className='navbar__bottom mt-7 xs:w-full md:w-[80%]'>
              <div className="navbar__bottom__list flex items-center justify-start gap-3 overflow-x-scroll"  >
                    {
                      NavbarData.map((item, index) => (
                        <Link href={item.href} key={index} onClick={() => setActiveTabIndex(index)} className={`flex items-center gap-2 hover:bg-slate-100/15 py-2 px-3 rounded-3xl ${activeTabIndex === index ? 'border border-white bg-slate-100/15' : ""}`}>
                          <div className="sm:hidden xs:hidden md:hidden lg:block" >{item.icon}</div>
                          <p className='navbar__bottom__list__item text-[0.9rem]' >{item.name}</p>
                        </Link>
                      ))
                    }
  
              </div>
         </div>
      </nav>
    </div>
  );
};
export default memo(NavBar);
