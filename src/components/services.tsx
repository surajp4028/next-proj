"use client"

import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import { cn } from "../utils/cn";

const FlipWordDemo = () => {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="mt-[60px]  px-[40px] max-w-6xl mx-auto">
      <div className="text-4xl  font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>

    </div>
  );
}

export default FlipWordDemo