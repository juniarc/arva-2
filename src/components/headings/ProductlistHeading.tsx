import Link from "next/link";

export default function ProductlistHeading({
  heading,
  href,
}: {
  heading: string;
  href: string;
}) {
  return (
    <div className="w-full flex justify-between items-center md:mb-5">
      <h2 className="capitalize">{heading}</h2>
      <Link href={href} className="underline text-primary text-xs md:text-base">
        See All
      </Link>
    </div>
  );
}
