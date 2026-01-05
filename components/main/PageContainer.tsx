"use client";

import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      {children}
    </div>
  );
}
