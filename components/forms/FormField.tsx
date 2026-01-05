"use client";

import { ReactNode } from "react";


type FormFieldProps = {
  column?: boolean; // false por defecto
  children: [ReactNode, ReactNode];
  width?: string;
};

export default function FormField({ column = false, children, width = "w-full"}: FormFieldProps) {
  return (
    <div className={`${width} flex ${column? 'flex-col': 'flex-row'} gap-4`}>
      <div className="w-auto h-full flex items-center">
        {children[0]}
      </div>
      <div className={`${column? 'w-full': 'flex-1'}`}>
        {children[1]}
      </div>
    </div>
  );
}
