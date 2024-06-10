/**
 * This is a React component that renders a section containing a list of projects.
 * @returns The `Projects` component is returning a section element with the id "projects" and the
 * class names "scroll-mt-28" and "mb-28". Inside the section, there is a `SectionHeading` component
 * with the text "My projects". Below the heading, there is a div element that contains a map function
 * that iterates over the `projectsData` array and renders a `
 */
"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/data/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
