"use client";

import { ReactNode } from "react";

type StackProps = {
  children: ReactNode;
};

export default function Stack({ children }: StackProps) {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      {children}
    </div>
  );
}
