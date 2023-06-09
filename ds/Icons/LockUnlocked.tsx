import * as React from "react";
import { SVGProps } from "react";

const SvgLockUnlocked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.75 11.75a1 1 0 0 1 1-1h10.5a1 1 0 0 1 1 1v5.5a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2v-5.5ZM7.75 10.5v-.657c0-1.228-.05-2.544.674-3.537C9 5.517 10.057 4.75 12 4.75c2 0 3.25 1.5 3.25 1.5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgLockUnlocked;
