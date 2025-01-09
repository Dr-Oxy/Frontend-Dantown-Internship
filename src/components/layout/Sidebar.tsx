"use client";

import Link from "next/link";
import Image from "next/image";
import { logoIcon } from "../../../public/assets/icons";
import { usePathname } from "next/navigation";

import { categories, mainRoutes } from "@/utils/routes";
import { avenirRegular } from "../../../public/assets/fonts";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div
      className={`${avenirRegular.className} shadow-md hidden lg:block h-full bg-white text-black`}
    >
      <div className="py-10 text-center">
        <Image className="mx-auto" src={logoIcon} alt="Sedboi.ey logo" />
      </div>

      <section>
        <ul id="main-app-navigation">
          {mainRoutes.map((item) => {
            return (
              <Link key={item.id} href={item.link}>
                <li
                  className={`px-8 bg-white ${
                    pathname === item.link
                      ? "bg-link-linear text-[#54BCBD]"
                      : "bg-white text-black"
                  } group py-3 flex items-center gap-x-4 hover:bg-link-linear hover:text-[#54BCBD] transition-colors ease-in-out`}
                >
                  <Image src={item.icon} alt={item.name} />

                  <span
                    className={`group-hover:text-[#54BCBD] ${
                      pathname === item.link ? "text-[#54BCBD]" : "text-gray1"
                    }`}
                  >
                    {item.name}
                  </span>
                </li>
              </Link>
            );
          })}
        </ul>

        <ul className="mt-8" id="categories">
          {categories?.map((item) => (
            <Link key={item.id} href={item.link}>
              <li className=" px-8 bg-white py-3 flex items-center text-gray1 gap-x-4 hover:bg-[#FFEEEB] transition-colors ease-in-out ">
                <span className="h-9 font-normal w-9 flex items-center justify-center bg-[#FFEEEB] rounded-full py-3 px-2">
                  <Image
                    height={14}
                    width={18}
                    className=""
                    src={item.icon}
                    alt={item.name}
                  />
                </span>

                <span className="text-sm"> {item.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
