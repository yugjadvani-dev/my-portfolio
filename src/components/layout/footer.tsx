/**
 * The Footer component is a functional component in TypeScript React that renders a footer element
 * with copyright information and details about the website.
 * @returns The Footer component is returning a JSX element representing the footer section of a
 * website. It includes a small copyright notice and a paragraph describing the technologies used to
 * build the website.
 */
"use client";
import React from "react";

export default function Footer() {

  const currentYear = new Date()

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {currentYear.getFullYear()} {process.env.NEXT_PUBLIC_NAME}. All rights reserved.
      </small>
      {/* <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p> */}
    </footer>
  );
}
