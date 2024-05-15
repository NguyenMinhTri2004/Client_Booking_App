import Image from 'next/image';
import React, { memo } from 'react';
import Navbar from './Navbar';

interface HeaderProps {
  isShowToggleTheme: boolean;
}
const Header: React.FC<HeaderProps> = ({ isShowToggleTheme = true }) => {
  return (
    <header className="w-full mx-auto pb-5 grid bg-[#375793] h-fit">
        <Navbar isShowToggleTheme={isShowToggleTheme} />
    </header>
  );
};

export default memo(Header);
