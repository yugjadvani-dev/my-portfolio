/**
 * The SectionHeading component is a functional component in TypeScript React that renders a heading
 * with a specific styling.
 * @param {SectionHeadingProps}  - The above code is a React functional component called
 * `SectionHeading`. It takes in a single prop called `children`, which is of type `React.ReactNode`.
 * @returns The SectionHeading component is returning an h2 element with the following attributes:
 * className="text-3xl font-medium capitalize mb-8 text-center". The content of the h2 element is the
 * children prop, which is passed as the content of the h2 element.
 */
"use client";
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
