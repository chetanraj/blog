import { Icon } from '@capper-ui/react';
import type { IconProps as PhosphorIconProps } from '@phosphor-icons/react';
import React, { type ComponentType } from 'react';

type BlogIconSize = 'sm' | 'md' | 'lg';

type BlogIconProps = {
  icon: ComponentType<PhosphorIconProps>;
  label?: string;
  size?: BlogIconSize;
  className?: string;
};

/** Capper UI Icon wrapper for Astro — SSRs to static SVG, no client JS. */
export function BlogIcon({ icon, label, size = 'lg', className }: BlogIconProps) {
  return <Icon icon={icon} size={size} label={label} className={className} />;
}
