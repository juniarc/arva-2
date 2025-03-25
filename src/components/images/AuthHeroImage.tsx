import LoginHero from "@/../public/images/login-hero.png";
import Image from "next/image";

export default function AuthHeroImage() {
  return (
    <div>
      <Image
        src={LoginHero}
        alt="Login Hero"
        priority
        className="lg:w-[100vw]"
      />
    </div>
  );
}
