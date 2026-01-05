"use client";

import { ReactNode } from "react";

type GridTwoColumnsProps = {
  children: [ReactNode, ReactNode];
};

export default function GridTwoColumns({ children }: GridTwoColumnsProps) {
  return (
    <div className="w-full grid grid-cols-2 gap-8">
      {children}
    </div>
  );
}
