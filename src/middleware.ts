import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  response.cookies.set("viewport", viewport, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}
export const config = {
  matcher: [
    "/",
    "/:shopName/:productInfo",
    "/buy-now",
    "/:shopName",
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
