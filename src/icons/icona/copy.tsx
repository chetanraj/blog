// Icona original export, MIT licensed. See THIRD_PARTY_NOTICES.md.
// Adaptation: allow string sizes to match the shared BlogIcon interface.
import { type SVGProps } from "react";

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "color"> {
  /** Width of the 24-unit icon box in px. */
  size?: number | string;
  /** Any CSS colour. Defaults to the surrounding text colour. */
  color?: string;
  strokeWidth?: number;
}

/** Copy (outline). */
export function CopyIcon({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      color={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15.5 8V5.5A1.5 1.5 0 0 0 14 4H5.5A1.5 1.5 0 0 0 4 5.5V14A1.5 1.5 0 0 0 5.5 15.5H8"/>
      <path d="M10 8H18.5A1.5 1.5 0 0 1 20 9.5V18A1.5 1.5 0 0 1 18.5 19.5H10A1.5 1.5 0 0 1 8.5 18V9.5A1.5 1.5 0 0 1 10 8Z"/>
    </svg>
  );
}
