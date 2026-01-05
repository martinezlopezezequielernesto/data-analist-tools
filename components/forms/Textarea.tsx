"use client";

type TextareaProps = {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  rows?: number;
};

export default function Textarea({ value, onChange, placeholder = "Write something...", rows = 7 }: TextareaProps) {
  return (
    <div className="w-full">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-green-600"
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)} // Llama al padre
      />
    </div>
  );
}
