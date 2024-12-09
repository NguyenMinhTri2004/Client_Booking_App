import { ButtonWhite } from '../../Button';
import Image from 'next/image';
import Link from 'next/link';
import React, { memo, useState } from 'react';
import { NavbarData } from './NavbarData';
import { MessageQuestion } from 'iconsax-react';
import { ButtonTransparent } from '../../Button';
import { useAuthStore } from '@/zustand/auth/store';
import { Avatar} from 'antd/lib';
import type { MenuProps } from 'antd/lib';
import { Button, Dropdown, Space } from 'antd/lib';
interface NavBarProps {
  isShowToggleTheme: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isShowToggleTheme = true }) => {
  const [navbar, setNavbar] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const loginMode = useAuthStore(state => state?.loginMode)
  const userInfo:any = useAuthStore(state => state.userInfo)
  console.log("Userinfo", userInfo)
  const changeMode = useAuthStore(state => state.changeMode)

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
         <Link href = "/mysettings">
             <p>Quản lý tài khoản</p>
          </Link>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick = {() => changeMode(false)} >
            <p>Đăng xuất</p>
        </div>
      ),
    },
    // {
    //   key: '3',
    //   label: (
    //     <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
    //       3rd menu item
    //     </a>
    //   ),
    // },
  ];

  return (
    <div className="w-full mx-auto text-white ">
      <nav className=" md:py-5 fixed py-2 px-4 h-fit w-full flex-col bg-primary-blue right-0 left-0 z-100 flex items-center justify-between">
         <div className='navbar__top flex items-center justify-between md:w-[80%] xs:w-full '>
              <div className='navbar__top__logo' >
                  <p className="navbar__top__logo__text text-2xl font-bold cursor-pointer" ><Link href="/" >TBooking</Link> </p>
              </div>

              <div className='flex items-center  gap-7 text-white font-bold ' >
                    <p className='navbar__top__list__item cursor-pointer' >VND</p>
                    <Image  src="/images/vietnamFlag.png"
                        alt="Picture of the author"
                        width="25"
                        height="25" 
                        className='navbar__top__list__item cursor-pointer rounded-full'
                    />
                    {/* <div className='navbar__top__list__item cursor-pointer' >
                          <MessageQuestion size="25" color="white"/>
                    </div> */}
                    {/* <div className='navbar__top__list__item cursor-pointer'></div> */}
                    {
                      loginMode ? 
                      <Dropdown menu={{ items }} placement="bottomLeft">
                          <div className = "flex gap-3 cursor-pointer p-2 hover:bg-blue-300/30 justify-center items-center duration-300 transition ease-in-out delay-150" >
                            <Avatar className='w-[30px] mb-[15px]' src={`${userInfo?.avatar ? userInfo?.avatar : "https://api.dicebear.com/7.x/miniavs/svg?seed=1"}`} />

                            <div className='' >
                                 <p className = "text-14 font-bold break-words" >{userInfo?.name}</p>
                                 <p className = "text-12 mb-2 font-normal text-orange-400" >Genius lv1</p>
                            </div>
                         </div>
                      </Dropdown>
                    
                      :
                      <div className='flex items-center gap-5' >
                         <Link href = "/signin" >
                            <ButtonWhite className='navbar__top__list__item rounded-md'>Đăng ký</ButtonWhite>
                        </Link>
                        <Link href = "/signin" >
                            <ButtonWhite className='navbar__top__list__item'>Đăng nhập</ButtonWhite>
                        </Link>
                      </div>
                    }
              </div>
         </div>

         <div className='navbar__bottom mt-2 xs:w-full md:w-[80%]'>
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
