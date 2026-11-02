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

/** File (outline). */
export function FileIcon({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }: IconProps) {
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
      <path d="M14 3.5H7A1.5 1.5 0 0 0 5.5 5V19A1.5 1.5 0 0 0 7 20.5H17A1.5 1.5 0 0 0 18.5 19V8Z"/>
      <path d="M14 3.5V8H18.5"/>
      <path d="M9 13H15"/>
      <path d="M9 16.5H13"/>
    </svg>
  );
}
