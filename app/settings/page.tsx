"use client";

import { useEffect, useState } from "react";
import PageContainer from "@/components/main/PageContainer";
import Paragraph from "@/components/page/Paragraph";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function Page() {
  const { setTheme } = useTheme();
  
  // Cargar tema desde localStorage al montar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log("Theme: "+savedTheme)
    if (savedTheme) {
      setTheme(savedTheme);
      //document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Si no hay tema guardado, usar el del sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      //document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // Función para cambiar el tema y guardarlo en localStorage
  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    //document.documentElement.classList.toggle("dark", newTheme === "dark");
  };


  return (
    <PageContainer>
      <Paragraph text="Tema de la aplicación:" />

      <div className="w-full flex justify-start items-center gap-8">
        <button
          onClick={() => handleThemeChange("light")}
          type="button"
          className="w-36 h-10 flex justify-center items-center gap-3 border-2 rounded-full cursor-pointer border-green-600 dark:border-neutral-700"
        >
          <MdLightMode className="size-4 lg:size-6 text-green-600 dark:text-neutral-400" />
          <span className="w-auto text-base lg:text-lg font-medium text-green-600 dark:text-neutral-400">
            Claro
          </span>
        </button>

        <button
          onClick={() => handleThemeChange("dark")}
          type="button"
          className="w-36 h-10 flex justify-center items-center gap-3 border-2 rounded-full cursor-pointer border-neutral-300 dark:border-green-600"
        >
          <MdDarkMode className="size-4 lg:size-6 text-neutral-400 dark:text-green-600" />
          <span className="w-auto text-base lg:text-lg font-medium text-neutral-500 dark:text-green-600">
            Oscuro
          </span>
        </button>
      </div>
    </PageContainer>
  );
}
