import HeroSection from "@/containers/home-page/hero-section/HeroSection";
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

  return (
    <main className="min-h-screen">
      <section>
        <HeroSection />
      </section>
      <HomeDesktop />
    </main>
  );
}
