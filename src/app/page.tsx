import HomeDesktop from "@/containers/home-page/HomeDesktop";
import HomeMobile from "@/containers/home-page/HomeMobile";
import HomeWrapper from "@/containers/home-page/HomeWrapper";
import { cookies } from "next/headers";

export default async function Home() {
  const cookiesList = await cookies();
  const viewport = cookiesList.get("viewport")?.value || undefined;
  return (
    <HomeWrapper
      viewport={viewport}
      mobileHome={<HomeMobile />}
      desktopHome={<HomeDesktop />}
    />
  );
}
