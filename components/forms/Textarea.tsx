"use client";

type TextareaProps = {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  height?: string;
};

export default function Textarea({ value, onChange, placeholder = "Write something...", height = "h-auto" }: TextareaProps) {
  return (
    <div className={height + " w-full"}>
      <textarea
        className={"w-full h-full p-3 text-sm md:text-base lg:text-lg border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-green-600"} 
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)} // Llama al padre
      />
    </div>
  );
}
