import React, { type ComponentType, type SVGProps } from 'react';

type BlogIconSize = 'sm' | 'md' | 'lg';

type IconComponentProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

type BlogIconProps = {
  icon: ComponentType<IconComponentProps>;
  label?: string;
  size?: BlogIconSize;
  className?: string;
};

const SIZE_PX: Record<BlogIconSize, number> = {
  sm: 16,
  md: 18,
  lg: 22,
};

export function BlogIcon({ icon: Icon, label, size = 'lg', className }: BlogIconProps) {
  const px = SIZE_PX[size];
  return (
    <Icon
      size={px}
      className={className}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
    />
  );
}
