import { Aperture, Clapperboard, Film, Sparkles } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const logos = [Aperture, Film, Clapperboard, Sparkles];

export function MarqueeDemo() {
  return (
    <Marquee pauseOnHover>
      {logos.map((Logo, index) => (
        <div
          key={index}
          className="mx-8 inline-flex h-16 w-16 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white"
        >
          <Logo className="h-7 w-7" />
        </div>
      ))}
    </Marquee>
  );
}
