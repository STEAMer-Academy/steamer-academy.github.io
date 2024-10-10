"use client";

import {
  MailAtSign01Icon,
  SmartPhone01Icon,
  MapPinIcon,
} from "hugeicons-react";
import { useStore } from "@nanostores/react";
import { themeStore } from "@/stores/themeStore";

export default function ContactInfo() {
  const $theme = useStore(themeStore);

  return (
    <div className={$theme === "dark" ? "text-[#a9b1d6]" : "text-gray-900"}>
      <p className="mb-6 text-lg">
        Welcome to a world of limitless possibilities, where the journey is as
        exhilarating as the destination, and where every moment is an
        opportunity to make your mark on the canvas of existence.
      </p>

      <div className="space-y-4">
        <div className="flex items-center">
          <MailAtSign01Icon className="mr-2" />
          <span>support@steameracademy.me</span>
        </div>
        <div className="flex items-center">
          <SmartPhone01Icon className="mr-2" />
          <span>+88017 7585 4054</span>
        </div>
        <div className="flex items-center">
          <MapPinIcon className="mr-2" />
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </div>
  );
}
