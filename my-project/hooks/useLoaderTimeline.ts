"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useLoaderTimeline = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  onComplete: () => void
) => {
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      timeline.current = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      // 1. Initial State
      timeline.current.set(".loader-content", { opacity: 0, y: 20 });
      timeline.current.set(".shutter-part", { scaleY: 0 });

      // 2. Fade In & Reveal
      timeline.current.to(".loader-content", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 3. Wait for percentage/reveal (percentage handles its own timing mostly)
      timeline.current.to({}, { duration: 1.5 });

      // 4. Camera Shutter Closing
      timeline.current.to(".shutter-part", {
        scaleY: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "expo.inOut",
      });

      // 5. Cinematic Flash (Film Burn)
      timeline.current.to(".flash-overlay", {
        opacity: 1,
        duration: 0.1,
        ease: "none",
      });
      timeline.current.to(".flash-overlay", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      // 6. Exit
      timeline.current.to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power4.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, onComplete]);

  return timeline;
};
