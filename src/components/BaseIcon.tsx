import React from 'react';
import type { JSX, SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';
import type { IconProps } from './iconsProps';

const presets = {
  xs: '3',
  sm: '4',
  md: '5',
  lg: '6',
  xl: '7',
  '2xl': '8',
};

const twSizes = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96',
  'auto',
  'px',
  '0.5',
  '1.5',
  '2.5',
  '3.5',
  '1/2',
  '1/3',
  '2/3',
  '1/4',
  '2/4',
  '3/4',
  '1/5',
  '2/5',
  '3/5',
  '4/5',
  '1/6',
  '2/6',
  '3/6',
  '4/6',
  '5/6',
  'full',
  'screen',
  'min',
  'max',
  'fit',
] as const;

type TailwindSize = (typeof twSizes)[number];
type PresetSize = keyof typeof presets;
export type SizeType = TailwindSize | PresetSize;

const isPresetSize = (size: SizeType): size is PresetSize => {
  return Object.keys(presets).includes(size);
};

export interface BaseIconProps extends SVGProps<SVGSVGElement> {
  size?: SizeType;
  iconProps: IconProps;
  outline: boolean;
}

const BaseIcon = ({
  size = 'md',
  iconProps,
  outline,
  className,
  strokeWidth = '2',
  ...otherProps
}: BaseIconProps): JSX.Element => {
  let twSize = '4';

  if (isPresetSize(size)) {
    twSize = presets[size];
  } else {
    twSize = size;
  }

  const outlineProps: SVGProps<SVGPathElement> = outline
    ? { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth }
    : {};
  return (
    <svg
      className={twMerge(`h-${twSize} w-${twSize}`, className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={outline ? 'none' : 'currentColor'}
      viewBox={iconProps.viewBox}
      {...otherProps}
    >
      {iconProps.d.map((currentD, index) => (
        <path key={index} {...outlineProps} d={currentD} />
      ))}
    </svg>
  );
};

export default BaseIcon;
