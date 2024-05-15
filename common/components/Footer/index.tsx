import { ButtonBlue, ButtonTransparent} from "../Button";

const Footer = () => {
  return (
    <footer className="md:pt-7 text-[#fdfcf9]  footer mt-auto">
        <div className='footer__top flex justify-center items-center flex-col bg-[#1b2c4c] pt-8 pb-8 px-1' >
             <h1 className='text-24' >Tiết kiệm thời gian và tiền bạc!</h1>
             <p className='text-[#A4A4A2]' >Hãy đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn</p>
             <div className='flex items-center justify-center mt-4 gap-5 w-full' >
                <input placeholder="Địa chỉ email của bạn" className=' bg-white p-3 text-[#A4A4A2] w-1/4' />
                <div>
                     <ButtonBlue>Đăng ký</ButtonBlue>
                </div>
                
             </div>
        </div>

        <div className='footer__mid bg-[#375793] p-3' >
              <div className='footer__mid__top flex items-center justify-center pb-2' >
                   <ButtonTransparent>Đăng chỗ nghỉ của quý vị</ButtonTransparent>
              </div>

              <div className='footer__mid__bottom items-center justify-center flex-wrap w-full gap-8 flex text-sm border-t border-white pt-2' >
                    <a className='underline' href=""> <b className='' >Phiên bản di động</b> </a>
                    <a className='underline' href=""> <b>Phiên bản di động</b> </a>
                    <a className='underline' href=""> <b>Phiên bản di động</b> </a>
                    <a className='underline' href=""> <b>Phiên bản di động</b> </a>
                    <a className='underline' href=""> <b>Phiên bản di động</b> </a>
                    <a className='underline' href=""> <b>Phiên bản di động</b> </a>
              </div>
        </div>

        <div className='footer__bottom flex items-center justify-center text-sm flex-wrap bg-white text-blue-600 gap-20 mt-3' >
                <ul className='flex flex-col items-center gap-2' >
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                </ul>

                <ul className='flex flex-col items-center gap-2' >
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                </ul>

                <ul className='flex flex-col items-center gap-2' >
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                </ul>

                <ul className='flex flex-col items-center gap-2' >
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                </ul>

                <ul className='flex flex-col items-center gap-2' >
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                    <a className='hover:text-amber-900 transition duration-300' href="">Phiên bản di động</a>
                </ul>

                

              
        </div>
    </footer>
  );
};

export default Footer;
