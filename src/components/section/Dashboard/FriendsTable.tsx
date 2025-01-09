"use client";
import React from "react";
import Image from "next/image";

import { Table } from "@/components/element";
import { createColumnHelper } from "@tanstack/react-table";
import {
  avenirBold,
  avenirMedium,
  avenirRegular,
} from "../../../../public/assets/fonts";
import { crownIcon } from "../../../../public/assets/icons";

const FriendsTable = ({ data }: FriendTableProps) => {
  const columnHelper = createColumnHelper<FriendProps>();

  const columns = [
    columnHelper.accessor("id", {
      header: "Rank",
      cell: (info) => {
        const id = info.getValue();

        return (
          <>
            {id === 1 ? (
              <HexagonWithNumber id={id} />
            ) : (
              <div
                className={` ${avenirMedium.className} ${
                  id === 1 ? "bg-cyan text-white" : "bg-white text-darkBlue"
                }  h-8 w-8  flex justify-center items-center text-base font-medium`}
              >
                {id}
              </div>
            )}
          </>
        );
      },
    }),

    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => {
        const value = info.row.original;
        const id = value.id;
        const name = info.getValue();

        return (
          <div className="  flex items-center">
            <div
              className={`h-10 w-10 rounded-full ${
                id % 2 === 0 ? " bg-lightRed2 " : " bg-ligthBlue2"
              } `}
            />

            <p
              className={`${avenirBold.className} ml-3 mr-7 whitespace-normal text-darkBlue font-medium text-base`}
            >
              {name}
            </p>

            {id === 1 && <Image src={crownIcon} alt={name} />}
          </div>
        );
      },
    }),

    columnHelper.accessor("category", {
      header: "Category",
      cell: (info) => {
        const category = info.getValue();
        return (
          <div
            className={`${avenirRegular.className} ${
              category === "Skaters"
                ? "bg-lightGreen before:bg-cyan3"
                : category === "Yogas"
                ? "bg-lightRed before:bg-red"
                : "bg-lightCyan before:bg-cyan2"
            } flex gap-x-[6px] items-center    before:block before:content-[''] before:h-2 before:w-2 before:rounded-full  w-fit px-4 py-1.5 rounded-2xl  font-normal text-sm text-darkBlue normal-case `}
          >
            {category}
          </div>
        );
      },
    }),

    columnHelper.accessor("point", {
      header: "Points",
      cell: (info) => (
        <div
          className={` ${avenirMedium.className} text-base font-medium text-darkBlue`}
        >
          {info.getValue()}
        </div>
      ),
    }),
  ];

  return <Table columns={columns} data={data} />;
};

export default FriendsTable;

export interface FriendProps {
  id: number;
  name: string;
  category: string;
  point: string;
}

interface FriendTableProps {
  data: FriendProps[];
}

export const HexagonWithNumber = ({ id }: { id: number }) => {
  return (
    <div className="relative flex justify-center items-center h-8 w-8 bg-teal-500 text-white font-bold text-sm">
      <span>{id}</span>
      {/* Top Triangle */}
      <div className="absolute -top-1 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[8px] border-transparent border-b-teal-500"></div>
      {/* Bottom Triangle */}
      <div className="absolute -bottom-1 w-0 h-0 border-l-[16px] border-r-[16px] border-t-[8px] border-transparent border-t-teal-500"></div>
    </div>
  );
};
