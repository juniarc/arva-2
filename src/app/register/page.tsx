import AuthHeroImage from "@/components/images/AuthHeroImage";
import RegisterForm from "@/containers/register/RegisterForm";
import Link from "next/link";

export default function Register() {
  return (
    <main className="w-full min-h-screen-minus-48 lg:min-h-screen-minus-120 py-5 lg:py-0 px-[60px] lg:px-20 2xl:px-32 flex flex-col lg:flex-row items-center">
      <AuthHeroImage />
      <div className="w-full md:px-20">
        <h1 className="text-2xl md:text-3xl text-center my-5">
          Create Your Account
        </h1>
        <RegisterForm />
        <p className="text-center text-xs my-5">Already have an account?</p>
        <Link
          href="/login"
          className="w-full h-10 rounded font-playfair-display font-bold flex justify-center items-center bg-secondary hover:bg-secondary/70 transition-colors"
        >
          Login
        </Link>
      </div>
    </main>
  );
}
