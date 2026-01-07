
type BadgeProps = {
  value: string;
  onClick?: () => void;
};

export default function Badge({ value, onClick }: BadgeProps) {
  return (
    <button type="button" onClick={() => onClick?.()} className="cursor-pointer group">
      <span className="w-auto px-4 py-2 bg-green-600 group-hover:bg-green-800 rounded-4xl text-xs md:text-sm font-bold flex justify-center items-center flex-nowrap text-nowrap text-white">
        {value}
      </span>
    </button>
  );
}
