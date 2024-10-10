"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { MultiplicationSignIcon, Tick01Icon } from "hugeicons-react";
import { useStore } from "@nanostores/react";
import { themeStore } from "@/stores/themeStore";

interface FormData {
  email: string;
}

interface FormStatus {
  message: string;
  success: boolean;
}

export function NewsletterForm() {
  const $theme = useStore(themeStore);
  const [formData, setFormData] = useState<FormData>({ email: "" });
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: "",
    success: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const formDataRecord: Record<string, string> = {};

    data.forEach((value, key) => {
      formDataRecord[key] = value as string;
    });

    const formDataEncoded = new URLSearchParams(formDataRecord).toString();

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataEncoded,
      });

      setFormStatus({
        message: "Thanks For Subscribing To Our Newsletter",
        success: true,
      });
      setFormData({ email: "" });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      setFormStatus({
        message: `Newsletter submission error: ${errorMessage}`,
        success: false,
      });
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 sm:flex-row"
        onSubmit={handleSubmit}
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
            $theme === "dark"
              ? "bg-[#1a1b26] text-[#a9b1d6]"
              : "bg-white text-gray-900"
          }`}
        />

        <div data-netlify-recaptcha="true"></div>

        <Button
          type="submit"
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 sm:w-auto"
        >
          Subscribe
        </Button>
      </form>

      {formStatus.message && (
        <div className="mt-4 flex items-center">
          {formStatus.success ? (
            <>
              <Tick01Icon className="text-green-500" />
              <p className="ml-2 text-green-500">{formStatus.message}</p>
            </>
          ) : (
            <>
              <MultiplicationSignIcon className="text-red-500" />
              <p className="ml-2 text-red-500">{formStatus.message}</p>
            </>
          )}
        </div>
      )}
    </>
  );
}
