"use client"

import { routes } from "@/routes/routes";
import { usePathname } from "next/navigation";

/**
 * Devuelve el título de la página según la ruta actual
 */
export default function PageTitle(){
  const pathname = usePathname();

  const activeRoute = routes.find((route) => route.href === pathname);
  const title = activeRoute ? activeRoute.title : "Not Found Title";
  const description = activeRoute? activeRoute.description: "Not Description";

  // Devuelve título dinámico
  return (
    <div className=" w-full h-full flex flex-col justify-between items-start">
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-green-600">{title}</h1>
      <h2 className="text-sm md:text-base lg:text-lg text-neutral-600 dark:text-neutral-400 font-medium">{description}</h2>
    </div>
    )
  ;
}
