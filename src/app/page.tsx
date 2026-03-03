import localFont from "next/font/local";
import { Landing } from "@/components/landing";

const libreBaskerville = localFont({
  src: [
    {
      path: "../../assets/fonts/libre-baskerville/static/LibreBaskerville-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/libre-baskerville/static/LibreBaskerville-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function Home() {
  return <Landing titleClassName={libreBaskerville.className} />;
}
