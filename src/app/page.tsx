import HomeDesktop from "@/containers/home-page/HomeDesktop";

export default function Home() {
  // const cookiesList = await cookies();
  // const viewport = cookiesList.get("viewport")?.value || undefined;
  // return (
  //   <HomeWrapper
  //     viewport={viewport}
  //     mobileHome={<HomeMobile />}
  //     desktopHome={<HomeDesktop />}
  //   />
  // );

  return <HomeDesktop />;
}
