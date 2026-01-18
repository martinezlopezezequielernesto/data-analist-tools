"use client";

type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "search"
  | "tel"
  | "url"
  | "date"
  | "time";

type InputProps = {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  type?: InputType;
};

export default function Input({
  value,
  onChange,
  placeholder = "Write something...",
  type = "text",
}: InputProps) {
  return (
    <input
      type={type}
      className="h-12 w-full p-2 text-sm md:text-sm lg:text-base dark:text-neutral-300 border-2 border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800/75 rounded-md focus:border-0 focus:outline-none focus:ring-1 focus:ring-green-600"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
