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
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
