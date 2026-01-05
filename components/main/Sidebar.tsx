"use client";

import { routes } from "@/routes/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
    const settings = routes[routes.length - 1];
  return (
    <aside className="h-full flex flex-col gap-8 py-8">
      <div className="w-full flex justify-center items-center text-xl font-semibold text-white">
        <div className="relative bg-white rounded-full p-2">
          <Image
            src="/images/Bird Logo.png"
            alt="Bird Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="pl-4 w-full">
        <ul className="w-full h-full flex flex-col gap-2">
            {routes.slice(0, -1).map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li key={index} className={"w-full rounded-l-full text-lg pl-4 py-3 " + `font-extrabold transition ${isActive? "bg-white text-green-600": "text-white hover:bg-green-200 hover:text-green-600"}`}>
                  <Link key={item.name} href={item.href} className="w-full flex justify-start items-center gap-4">
                    <item.icon size={20}/>
                    <span className="">{item.name}</span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
      <div className="pl-4 flex-1">
        <ul className="h-full w-full flex flex-col justify-end">
            <li className={"w-full rounded-l-full text-lg pl-4 py-4 " + `font-extrabold transition ${pathname === settings.href? "bg-white text-green-600": "text-white hover:bg-green-200 hover:text-green-600"}`}>
              <Link key={settings.name} href={settings.href} className="w-full flex justify-start items-center gap-4">
                <settings.icon size={20}/>
                <span className="">{settings.name}</span>
              </Link>
            </li>
        </ul>
      </div>
    </aside>
  );
}
