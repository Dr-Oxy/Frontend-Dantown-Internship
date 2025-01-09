"use client";
import { DashCard, FriendsTable, ChatArea } from "@/components/section";
import { cyclist, skater, yoga } from "../../public/assets/images";

import { avenirBlack, avenirBold } from "../../public/assets/fonts";

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
            <FriendsTable data={data} />
          </div>
        </div>
      </section>

      <section className=" overflow-y-auto  pt-5 lg:pl-8 lg:col-span-4">
        <h3
          className={`${avenirBlack.className} mb-6 text-base font-bold text-darkBlue`}
        >
          Chats
        </h3>

        <ChatArea />
      </section>
    </div>
  );
};

export default Home;

const data = [
  {
    id: 1,
    name: "Mamang Ironmen",
    category: "Skaters",
    point: "2.140",
  },
  {
    id: 2,
    name: "Ariana Grande",
    category: "Cyclists",
    point: "1.814",
  },
  {
    id: 3,
    name: "Trent Alexander Arnold",
    category: "Skaters",
    point: "1.620",
  },
  {
    id: 4,
    name: "Shakira Wakawaka",
    category: "Yogas",
    point: "1.280",
  },
];
