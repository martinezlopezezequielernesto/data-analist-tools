type ParagraphProps = {
  text: string;
  center?: boolean;
};

export default function Paragraph({ text, center = false}: ParagraphProps) {
  return <p className={"w-full text-base lg:text-lg font-medium text-neutral-600 dark:text-neutral-400 flex items-center "+(center?"justify-center":"justify-start")}>{text}</p>;
}