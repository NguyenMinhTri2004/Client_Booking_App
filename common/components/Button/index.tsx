import { useRouter} from 'next/router';
import { useEffect, useState } from 'react';
import React, { Children } from 'react';
import { Add } from "iconsax-react";

const Button = (props:any) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push('/app/investment');
      }}
      className={`button w-fit md:px-[62px] px-8 py-3 md:py-4 md:text-[16px] rounded-full bg-blue border-[2px_2px_4px_2px] border-[#887EE3] md:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:z-10 font-bold text-[#887EE3] duration-300`}
    >
      {props.children}
    </button>
  );
};

export const ButtonWhite = (props: any) => {
  const router = useRouter();
  return (
    <button
      // onClick={() => {
      //   router.push(`/app/founder/detail/${props.link}`);
      // }}
      className="button hover:bg-hover-blue h-fit w-fit md:px-[20px] px-3 py-3 md:py-[6px] text-[14px] rounded-sm bg-white text-accent-blue border-[2px_2px_4px_2px] md:transition ease-in-out delay-150 font-bold duration-300"
    >
      {props.children}
    </button>
  );
};


export const ButtonBlue = (props: any) => {
  const router = useRouter();
  return (
    <button
      // onClick={() => {
      //   router.push(`/app/founder/detail/${props.link}`);
      // }}
      className="button w-full h-full md:w-auto md:px-5 px-4 py-2 md:py-3 text-sm md:text-base rounded-sm bg-primary-blue text-white border-2 border-transparent transition ease-in-out delay-150 font-bold duration-300 hover:bg-blue-700"
    >
      {props.children}
    </button>
  );
};

export const ButtonTransparent = (props: any) => {
  const router = useRouter();
  return (
    <button
      // onClick={() => {
      //   router.push(`/app/founder/detail/${props.link}`);
      // }}
      className={`button md:px-[20px] h-full px-3 py-5 md:py-[6px] text-[14px] hover:bg-blue-300/30 rounded-sm bg-transparent ${props.drawer ? "text-blue-700" : "text-white"}  border-[2px_2px_4px_2px] ${props.drawer ? "border-blue-600" : "border-none"} border md:transition ease-in-out delay-150 font-bold duration-300`}
    >
      {props.children}
    </button>
  );
};


export const ButtonToPic = (props : any) => {
  const [activeButtonToPic, setActiveButtonToPic] = useState(false);

  const handleActive = () => {
    props.handleOpenDrawer()
    setActiveButtonToPic(true);
  }

  useEffect(() => {
    if(!props.openDrawer){
      setActiveButtonToPic(false);
    }
}, [props?.openDrawer]);

  return (
    <button
      className="border py-1 px-2 w-24 gap-2 rounded-3xl border-slate-300 flex items-center justify-center"
      onClick = {() => handleActive()}
    >
      <Add
        size="20"
        color="black"
        className={`duration-75 ${activeButtonToPic ? "rotate-45" : ""}`}
       
      />
      {props.children}
    </button>
  );
};

// export const ButtonFounderDetail = (props: any) => {
//   const router = useRouter();
//   return (
//     <button
//       onClick={() => {
//         router.push('/app/founder/detail/1');
//       }}
//       className="button w-full md:px-[20px] px-8 py-3 md:py-[6px] md:text-[16px] rounded-full bg-[#D8D8D8] border-[2px_2px_4px_2px] md:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:z-10 font-bold text-[#373636] duration-300"
//     >
//       {props.content}
//     </button>
//   );
// };

// export const ButtonSubmit = (props: any) => {
//   const router = useRouter();
//   return (
//     <button
//       // onClick={() => {
//       //   router.push("/app/founder/detail/1");
//       // }}
//       className="button h-fit w-full md:px-[20px] px-8 py-3 md:py-[6px] md:text-[16px] rounded-full bg-[#373636] border-[2px_2px_4px_2px] md:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:z-10 font-bold text-white duration-300"
//     >
//       {props.content}
//     </button>
//   );
// };

export default Button;
