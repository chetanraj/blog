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

/** Sun (outline). */
export function SunIcon({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }: IconProps) {
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
      <circle cx={12} cy={12} r={4}/>
      <path d="M12 5.5V3.5"/>
      <path d="M16.6 7.4L18 6"/>
      <path d="M18.5 12H20.5"/>
      <path d="M16.6 16.6L18 18"/>
      <path d="M12 18.5V20.5"/>
      <path d="M7.4 16.6L6 18"/>
      <path d="M5.5 12H3.5"/>
      <path d="M7.4 7.4L6 6"/>
    </svg>
  );
}
