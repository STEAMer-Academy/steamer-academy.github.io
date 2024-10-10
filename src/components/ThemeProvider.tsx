"use client";

import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { themeStore } from "@/stores/themeStore";
import "@/app/globals.css";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const $theme = useStore(themeStore);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", $theme === "dark");
  }, [$theme]);

  return <>{children}</>;
}
