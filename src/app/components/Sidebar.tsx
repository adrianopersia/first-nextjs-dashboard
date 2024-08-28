import Image from "next/image";
import React from "react";
import { IoBrowsersOutline, IoCalculator } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import SidebarMenuItem from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualization",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Client Side Counter",
  },
];

const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <RiNextjsFill className="mr-2" />
          NextJs<span className="text-blue-500">Board</span>.
        </h1>
        <p className="text-slate-500 text-sm">Managing my first Dashboard</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://instagram.fmdz4-1.fna.fbcdn.net/v/t51.2885-19/435397809_387330707531083_4003771890646895798_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fmdz4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=jNfMXmklGHUQ7kNvgHH71Yk&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYDOF7nbuuQYZR5yKRjy5BRS8DJ6YIofRKvp7Gkak5kUiw&oe=66D589B4&_nc_sid=8f1549"
              alt=""
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Adriano Persia</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
