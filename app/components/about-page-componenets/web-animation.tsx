"use client";

import Lottie from "lottie-react";
import animation from "@/app/assests/animations/web-anim.json";
export function WebAnimation() {
  return <Lottie animationData={animation} loop={true} />;
}
