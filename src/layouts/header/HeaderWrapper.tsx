"use client";

import { useScreenSizeContext } from "@/providers/ScreenSizeProvider";
import { useEffect, useState } from "react";

export default function HeaderWrapper({
  viewport,
  desktopHeader,
  mobileHeader,
}: {
  desktopHeader: React.ReactNode;
  mobileHeader: React.ReactNode;
  viewport: string | undefined;
}) {
  const { deviceType } = useScreenSizeContext();
  const [currentDevice, setCurrentDevice] = useState(viewport);

  useEffect(() => {
    if (deviceType) {
      setCurrentDevice(deviceType);
    }
  }, [deviceType]);
  return currentDevice === "desktop" || currentDevice === undefined
    ? desktopHeader
    : mobileHeader;
}
