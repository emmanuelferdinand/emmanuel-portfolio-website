import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Social crawlers do not follow image redirects, so opengraph-image must serve directly
  matcher: "/((?!api|trpc|_next|_vercel|.*opengraph-image|.*\\..*).*)",
};
