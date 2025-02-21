export default function LineDivider({ classname }: { classname?: string }) {
  return <div className={`w-full h-[1px] bg-gray ${classname}`}></div>;
}
