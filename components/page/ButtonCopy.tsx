"use client";

import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

type ButtonCopyProps = {
  text: string;
  type?: "primary" | "secondary";
};

export default function ButtonCopy({ text, type = "primary" }: ButtonCopyProps) {
  const [label, setLabel] = useState<string>("Copiar");
  const [copied, setCopied] = useState<boolean>(false);

  const baseClasses = "h-12 px-4 py-2 rounded-md border-1 font-semibold transition-colors duration-200 cursor-pointer";
  const styles = {
    primary: "text-white bg-green-600 hover:bg-green-700",
    secondary: "text-green-600 border-green-600 bg-white dark:bg-neutral-900 hover:bg-green-600 hover:text-white",
  };

  const copyToClipboard = (text: string): void => {
    if (!text) return;

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setLabel("Copiado");
        setCopied(true);
      })
      .catch((err) => {
        console.error("Error al copiar:", err);
      })
      .finally(() => {
        setTimeout(() => {
          setLabel("Copiar");
          setCopied(false);
        }, 2000);
      });
  };

  return (
    <button className={`${baseClasses} ${styles[type]} flex flex-row justify-center items-center gap-3`} onClick={() => copyToClipboard(text)}>
      {copied ? <FiCheck className="size-3.5"/> : <FiCopy className="size-3.5"/>}
      <span className="text-sm md:text-base lg:text-lg font-semibold">{label}</span>
    </button>
  );
}
