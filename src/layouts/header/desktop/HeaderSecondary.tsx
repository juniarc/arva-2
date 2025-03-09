import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function HeaderSecondary() {
  return (
    <div className="hidden lg:block">
      <div className="w-full flex items-center gap-5 justify-end bg-primary text-white lg:px-20 2xl:px-32 py-1">
        <p className="text-white">Languange</p>
        <div className="w-[1px] h-3 bg-white"></div>
        <p className="text-white">Bulk Order Inquiries</p>
        <div className="w-[1px] h-3 bg-white"></div>
        <div className="flex items-center gap-5">
          <p className="text-white">Follow Us on</p>
          <div className="flex items-center gap-3">
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
            <FaTiktok />
          </div>
        </div>
        <div className="w-[1px] h-3 bg-white"></div>
        <p className="text-white">Help Center</p>
      </div>
    </div>
  );
}
