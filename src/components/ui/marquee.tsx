import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number;
  trackClassName?: string;
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  trackClassName,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("w-full overflow-hidden z-10", className)}
      dir="ltr"
      {...props}
    >
      <div
        className={cn("relative flex w-full overflow-hidden py-5", trackClassName)}
      >
        <div
          className={cn(
            "flex w-max animate-marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse",
          )}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}
