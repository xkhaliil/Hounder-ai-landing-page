"use client";

import Lottie from "lottie-react";
import animation from "@/app/assests/animations/mobile-anim.json";
export default function MobileAnimation() {
  return (
    <div>
      <Lottie animationData={animation} loop={true} />
    </div>
  );
}
