"use client";
import { DashCard, FriendsTable, ChatArea } from "@/components/section";
import { cyclist, skater, yoga } from "../../public/assets/images";

import {
  avenirBlack,
  avenirBold,
  avenirRegular,
} from "../../public/assets/fonts";

import { tableData } from "@/utils/dummyData";

const Home = () => {
  return (
    <div className="w-full h-full lg:h-mainHeight grid grid-cols-1 lg:grid-cols-12 ">
      <section className=" overflow-y-auto  pt-5 lg:col-span-8 lg:border-r lg:pr-8 border-gray2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <DashCard
            src={cyclist}
            heading={"Real Wild Cyclist"}
            sub={"We are the wildest cyclist."}
          />

          <DashCard
            src={yoga}
            heading={"Yoga Forces"}
            sub={"Welcome to the biggest..."}
          />

          <DashCard
            src={skater}
            heading={"Skater Boys"}
            sub={"The best states of skaters."}
          />
        </div>

        <div className="mt-[30px] bg-white rounded-lg p-4 md:p-6">
          <div className="flex justify-between items-center">
            <h3
              className={`${avenirBold.className} text-base font-bold text-darkBlue`}
            >
              Friends Rank
            </h3>

            <div className='flex items-center gap-x-3 before:content-[""] before:block before:h-[5px] before:w-[5px] before:rounded-full before:bg-darkBlue  after:content-[""] after:block after:h-[5px] after:w-[5px] after:rounded-full after:bg-darkBlue' />
          </div>

          <div className="mt-7">
            <FriendsTable data={tableData} />
          </div>
        </div>
      </section>

      <section className=" overflow-y-auto  lg:pt-5 lg:pl-8 lg:col-span-4">
        <h3
          className={`${avenirBlack.className} flex gap-x-[10px] mb-6 text-base font-bold text-darkBlue`}
        >
          Chats{" "}
          <div
            className={`${avenirRegular.className} flex items-center justify-center  h-6 w-9 rounded-2xl bg-ligthBlue text-xs font-normal`}
          >
            14
          </div>
        </h3>

        <ChatArea />
      </section>
    </div>
  );
};

export default Home;
