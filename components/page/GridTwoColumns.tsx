"use client";

import { ReactNode } from "react";

type GridTwoColumnsProps = {
  children: [ReactNode, ReactNode];
};

export default function GridTwoColumns({ children }: GridTwoColumnsProps) {
  return (
    <div className="w-full grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-8">
      {children}
    </div>
  );
}
