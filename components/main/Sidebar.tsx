"use client";

import { useSidebar } from "@/context/sidebar-context";
import { routes } from "@/routes/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillCode } from "react-icons/ai";

export default function Sidebar() {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar } = useSidebar();
  const settings = routes[routes.length - 1];

  return (
    <aside className={(isCollapsed? "w-20 md:w-24":"w-58") + " h-full flex flex-col gap-10 pt-10 pb-12"}>
      <div className="w-full px-5 flex justify-start items-center text-xl font-semibold text-white">
        <div onClick={toggleSidebar} className="pl-1 flex gap-2 items-center cursor-pointer">
          <AiFillCode className="size-9 md:size-12 text-white"/>
          {!isCollapsed?
            <h1 className="text-2xl text-white font-bold">DevTools</h1>
            :null
          }
        </div>
        {/*
          <div onClick={toggleSidebar} className="relative bg-white rounded-full p-2">
            <Image
              src="/images/Bird Logo.png"
              alt="Bird Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
        */}
      </div>

      {/* Navigation */}
      <nav className="pl-4 pt-10 w-full">
        <ul className="w-full h-full flex flex-col gap-2">
            {routes.slice(0, -1).map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li key={index} className={"w-full rounded-l-full text-base md:text-lg  " + `font-extrabold transition ${isActive? "bg-white text-green-600": "text-white hover:bg-green-800 hover:text-white"}`}>
                  <Link key={item.name} href={item.href} className="w-full pl-4 py-3 flex justify-start items-center gap-4">
                    <item.icon className="size-5 md:size-7"/>
                    {!isCollapsed?
                      <span className="text-sm md:text-base">{item.name}</span>
                      :null
                    }
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
      <div className="pl-4 flex-1">
        <ul className="h-full w-full flex flex-col justify-end">
            <li className={"w-full rounded-l-full text-base md:text-lg " + `font-extrabold transition ${pathname === settings.href? "bg-white text-green-600": "text-white hover:bg-green-800 hover:text-white"}`}>
              <Link key={settings.name} href={settings.href} className="w-full pl-4 py-3 flex justify-start items-center gap-4">
                <settings.icon className="size-5 md:size-7"/>
                {!isCollapsed?
                  <span className="text-sm md:text-base">{settings.name}</span>
                  :null
                }
              </Link>
            </li>
        </ul>
      </div>
    </aside>
  );
}
