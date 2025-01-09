"use client";
import React from "react";
import Image from "next/image";
import {
  avenirBold,
  avenirMedium,
  avenirRegular,
} from "../../../public/assets/fonts";
import {
  bellIcon,
  messageIcon,
  searchIcon,
} from "../../../public/assets/icons";

import ProfileDropdown from "./ProfileDropdown";
import { profileDefaultImg } from "../../../public/assets/images";

const Header = () => {
  return (
    <header
      className={` grid grid-cols-3 lg:grid-cols-11  ${avenirRegular.className}`}
    >
      <div className="col-span-2 lg:col-span-8 lg:border-r lg:pr-10 border-gray2 flex items-start justify-between">
        <div>
          <h1
            className={`text-darkBlue text-lg lg:text-2xl ${avenirBold.className} `}
          >
            Hey, Dustin!
          </h1>
          <p className={`${avenirMedium.className} text-gray1 text-sm mt-2`}>
            Welcome back, nice to see you again!
          </p>
        </div>

        <div className="hidden lg:flex  rounded-[50px] w-full max-w-sm py-3  px-4 bg-white  items-center gap-x-3">
          <Image src={searchIcon} alt="Search" height={16} width={16} />
          <input
            type="text"
            placeholder="Search here"
            className=" bg-transparent mt-1  text-gray1 text-sm "
          />
        </div>
      </div>

      <div className="col-span-1 lg:pl-10 lg:col-span-3">
        <div className="flex items-center gap-x-6">
          <button className="flex lg:hidden  items-center justify-center bg-white/60 p-3 rounded shadow-lg">
            <Image
              height={14}
              width={14}
              src={searchIcon}
              alt="search-mobile"
            />
          </button>

          <div className="hidden lg:flex gap-x-7">
            <button className="flex items-center justify-center ">
              <Image height={18} width={18} src={messageIcon} alt="message" />
            </button>

            <button className="flex items-center justify-center">
              <Image height={18} width={18} src={bellIcon} alt="notification" />
            </button>
          </div>

          <ProfileDropdown userName="Jamet Roy" avatarUrl={profileDefaultImg} />
        </div>
      </div>
    </header>
  );
};

export default Header;
