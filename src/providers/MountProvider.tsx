"use client";

import { createContext, useContext, useLayoutEffect, useState } from "react";

const MountContext = createContext<{ isMounted: boolean }>({
  isMounted: false,
});

export function MountProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <MountContext.Provider value={{ isMounted }}>
      {children}
    </MountContext.Provider>
  );
}

export const useMountContext = () => {
  const context = useContext(MountContext);
  if (!context) {
    throw new Error("useMountContext must be used within a MountProvider");
  }

  return context;
};
