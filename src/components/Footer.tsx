"use client";

import Link from "next/link";
import {
  YoutubeIcon,
  Location01Icon,
  HelpCircleIcon,
  Mail01Icon,
  TelephoneIcon,
  Clock01Icon,
  CopyrightIcon,
} from "hugeicons-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-4">
        {/* Location Section */}
        <div className="flex flex-col items-start p-3 md:items-center">
          <h3 className="flex items-center space-x-2 font-bold">
            <Location01Icon className="h-6 w-6" />
            <span>Location</span>
          </h3>
          <p>Dhaka, Bangladesh</p>
        </div>

        {/* Hours Section */}
        <div className="flex flex-col items-start p-3 md:items-center">
          <h3 className="flex items-center space-x-2 font-bold">
            <Clock01Icon className="h-6 w-6" />
            <span>Hours</span>
          </h3>
          <p>Friday - Saturday</p>
          <p>8am - 8pm</p>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-start p-3 md:items-center">
          <h3 className="flex items-center space-x-2 font-bold">
            <YoutubeIcon className="h-6 w-6" />
            <span>Social</span>
          </h3>
          <Link href="#" className="transition-colors hover:text-blue-600">
            Facebook
          </Link>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-start p-3 md:items-center">
          <h3 className="flex items-center space-x-2 font-bold">
            <HelpCircleIcon className="h-6 w-6" />
            <span>Contact</span>
          </h3>
          <p className="flex items-center space-x-2">
            <Mail01Icon className="h-6 w-6" />
            <span>support@steameracademy.me</span>
          </p>
          <p className="flex items-center space-x-2">
            <TelephoneIcon className="h-6 w-6" />
            <span>+88017 7585 4054</span>
          </p>
        </div>
      </div>

      {/* Footer Copyright */}
      <p className="mt-8 text-center text-sm text-[#B0B0B0]">
        <div className="flex items-center justify-center space-x-2 p-6">
          <CopyrightIcon className="h-5 w-5" />
          <h3 className="font-bold">
            <span>2024 STEAMer Academy. All rights reserved.</span>
          </h3>
        </div>
      </p>
    </footer>
  );
}
