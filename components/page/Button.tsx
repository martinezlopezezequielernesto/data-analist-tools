"use client";

type ButtonProps = {
  title: string;
  type?: "primary" | "secondary";
  onClick?: () => void;
};

export default function Button({ title, type = "primary", onClick }: ButtonProps) {
  const baseClasses = "h-12 px-4 py-2 rounded-md border-1 text-lg font-semibold transition-colors duration-200 cursor-pointer";
  const styles = {
    primary: "text-white bg-green-600 hover:bg-green-700",
    secondary: "text-green-600 border-green-600 bg-white-600 hover:bg-green-600 hover:text-white",
  };

  return (
    <button className={`${baseClasses} ${styles[type]}`} onClick={onClick}>
      {title}
    </button>
  );
}

