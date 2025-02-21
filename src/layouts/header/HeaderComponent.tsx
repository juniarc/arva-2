import { cookies } from "next/headers";
import HeaderWrapper from "./HeaderWrapper";
import HeaderDesktop from "./desktop/HeaderDesktop";
import Header from "./Header";

export async function HeaderComponent() {
  const cookiesList = await cookies();
  const viewport = cookiesList.get("viewport")?.value || undefined;

  return (
    <HeaderWrapper
      viewport={viewport}
      mobileHeader={<Header />}
      desktopHeader={<HeaderDesktop />}
    />
  );
}
