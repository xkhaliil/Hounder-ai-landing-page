"use client";

import dynamic from "next/dynamic";
import animation from "@/app/assests/animations/web-anim.json";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="h-64 w-64 animate-pulse rounded-lg bg-gray-200" />
  ),
});

export function WebAnimation() {
  return (
    <div role="img" aria-label="Web platform animation" aria-hidden="true">
      <Lottie animationData={animation} loop={true} />
    </div>
  );
}
