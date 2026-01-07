"use client"

import { routes } from "@/routes/routes";
import { usePathname } from "next/navigation";

/**
 * Devuelve el título de la página según la ruta actual
 */
export default function PageTitle(){
  const pathname = usePathname();

  const activeRoute = routes.find((route) => route.href === pathname);
  const title = activeRoute ? activeRoute.title : "Not Found Title"

  // Devuelve título dinámico
  return <h1 className="pl-8 w-full h-full flex justify-center items-center text-lg sm:text-2xl lg:text-4xl font-bold text-white">{title}</h1>;
}
