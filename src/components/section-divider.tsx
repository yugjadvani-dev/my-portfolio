/**
 * The SectionDivider component is a React component that renders a horizontal line with animation.
 * @returns The function `SectionDivider` is returning a `motion.div` component from the
 * `framer-motion` library.
 */
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    />
  );
}
