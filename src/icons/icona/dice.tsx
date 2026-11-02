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

/** Dice (outline). */
export function DiceIcon({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }: IconProps) {
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
      <path d="M6.5 3.5H17.5A3 3 0 0 1 20.5 6.5V17.5A3 3 0 0 1 17.5 20.5H6.5A3 3 0 0 1 3.5 17.5V6.5A3 3 0 0 1 6.5 3.5Z"/>
      <circle cx={8} cy={8} r={1.1} fill="currentColor"/>
      <circle cx={16} cy={8} r={1.1} fill="currentColor"/>
      <circle cx={12} cy={12} r={1.1} fill="currentColor"/>
      <circle cx={8} cy={16} r={1.1} fill="currentColor"/>
      <circle cx={16} cy={16} r={1.1} fill="currentColor"/>
    </svg>
  );
}
