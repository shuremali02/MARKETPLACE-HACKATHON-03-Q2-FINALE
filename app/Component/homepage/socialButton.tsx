import React from 'react';
const SocialButton = ({image,text }:{image:string,text:string}) => {
  return (
    <button className="group w-12 hover:w-44 h-12 hover:bg-slate-900  bg-zinc-800 relative  rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-slate-900 before:hover:bg-sky-600 before:rotate-45">
      <div>{image}</div>
      <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">{text}</span>
    </button>
  );
}

export default SocialButton;
