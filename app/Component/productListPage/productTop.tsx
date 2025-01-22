import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function TopSection() {
  return (
    <div className="hidden sm:hidden  lg:flex  w-full text-white bg-[#23856D] h-[50px]">
      <div className="py-3 w-full flex justify-center items-center gap-11 px-10">
        <div className="w-full  h-[30px] flex gap-4 items-center">
          <span className="h-[21px] text-sm flex items-center gap-2">
            <BsTelephone /> (225)5550118
          </span>

          <span className="h-[21px] text-sm items-center flex gap-2">
            <MdOutlineMail /> nash@yahoo.com
          </span>
        </div>

        <p className="text-sm w-full flex justify-center">
          Follow Us and get a chance to win 80% off
        </p>

        <div className="w-full h-6 flex font-semibold justify-end gap-4">
          Follow Us:
          <p className="flex flex-row space-x-4 text-white">
            <FaLinkedin size={22} /> <FaXTwitter size={22} />{" "}
            <FaGithub size={22} /> <FaTwitter size={22}/>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
