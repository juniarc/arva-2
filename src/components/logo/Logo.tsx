import Image from "next/image";
import Link from "next/link";

export default function Logo({
  image,
  classname,
}: {
  image: string;
  classname: string;
}) {
  return (
    <Link href="/" className={`${classname}`}>
      <Image src={image} alt="Arva Logo" className="w-full" />
    </Link>
  );
}
