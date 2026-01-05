type ParagraphProps = {
  text: string;
  center?: boolean;
};

export default function Paragraph({ text, center = false}: ParagraphProps) {
  return <p className={"w-full text-lg font-medium text-gray-600 flex items-center "+(center?"justify-center":"justify-start")}>{text}</p>;
}