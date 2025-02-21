"use client";

import { useScreenSizeContext } from "@/providers/ScreenSizeProvider";
import { useEffect, useState } from "react";
import HeroSection from "./hero-section/HeroSection";

export default function HomeWrapper({
  viewport,
  mobileHome,
  desktopHome,
}: {
  mobileHome: React.ReactNode;
  desktopHome: React.ReactNode;
  viewport: string | undefined;
}) {
  const { deviceType } = useScreenSizeContext();
  const [currentDevice, setCurrentDevice] = useState(viewport);

  useEffect(() => {
    if (deviceType) {
      setCurrentDevice(deviceType);
    }
  }, [deviceType]);
  return (
    <main className="min-h-screen">
      <section>
        <HeroSection />
      </section>
      {currentDevice === "desktop" || currentDevice === undefined
        ? desktopHome
        : mobileHome}
    </main>
  );
}
