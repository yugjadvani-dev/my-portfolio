/**
 * The `useSectionInView` function is a custom hook in TypeScript that uses the `useInView` hook from
 * the `react-intersection-observer` library to determine if a section is in view and updates the
 * active section in the context accordingly.
 * @param {SectionName} sectionName - The sectionName parameter is a string that represents the name of
 * the section that you want to track if it is in view or not.
 * @param [threshold=0.75] - The threshold parameter determines the percentage of the section that
 * needs to be visible in order for the inView value to be true. For example, if the threshold is set
 * to 0.75, at least 75% of the section needs to be visible for the inView value to be true.
 * @returns The function `useSectionInView` returns an object with a single property `ref`.
 */
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types/types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
