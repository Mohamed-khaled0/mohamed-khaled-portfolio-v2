"use client";

import React, { useState } from "react";
import { CircleFlag } from 'react-circle-flags';

export const DeutschFlag = () => <CircleFlag className="w-4 h-4 mr-1 " countryCode="de"  />;
export const EnglishFlag = () => <CircleFlag className="w-4 h-4 mr-1 " countryCode="us"  />;

export default function LanguageSwitch() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "de" : "en"));
  };

  return (
    <button
      aria-label={language === "en" ? "Switch to German" : "Switch to English"}
      className="flex items-center justify-center px-3 py-2 text-sm hover:text-gray-950 transition dark:text-gray-200 text-black"
      onClick={toggleLanguage}
    >
      {language === "en" ? (
        <>
          <EnglishFlag aria-hidden="true" />
          <span>En</span>
        </>
      ) : (
        <>
          <DeutschFlag  aria-hidden="true" />
          <span>De</span>
        </>
      )}
    </button>
  );
}
