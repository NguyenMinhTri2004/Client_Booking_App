import { useRouter } from 'next/router';
import React, { Children } from 'react';

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
      className="button md:px-[20px] h-full w-full px-3 py-5 md:py-[6px] text-[14px] rounded-sm bg-primary-blue text-white border-[2px_2px_4px_2px] md:transition ease-in-out delay-150 font-bold duration-300"
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
      className="button md:px-[20px] h-full px-3 py-5 md:py-[6px] text-[14px] hover:bg-slate-100/20 rounded-sm bg-transparent text-white border-[2px_2px_4px_2px] border-white border md:transition ease-in-out delay-150 font-bold duration-300"
    >
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
