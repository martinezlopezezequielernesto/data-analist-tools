"use client";

type LabelProps = {
  htmlFor?: string;
  children: React.ReactNode;
};

export default function Label({ htmlFor = "", children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="w-auto px-1 text-sm md:text-base lg:text-lg font-medium text-gray-700">
      {children}
    </label>
  );
}
