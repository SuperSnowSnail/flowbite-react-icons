import { writeFile } from 'node:fs/promises';
import * as Props from '../components/iconsProps';

const generateIcons = async (): Promise<void> => {
  const lines = [
    '// THIS FILE IS AUTO-GENERATED!',
    "// If you want to regenerate this file manually, run 'npm run generate:icons' from root project directory",
    "import React from 'react';",
    "import type { SVGProps, JSX } from 'react';",
    "import * as Props from './iconsProps';",
    "import BaseIcon from './BaseIcon';",
    "import type { SizeType } from './BaseIcon';",
    '',
    'interface IconProps extends SVGProps<SVGSVGElement> {',
    '  size?: SizeType,',
    '}',
    '',
  ];
  Object.keys(Props).forEach((name) => {
    lines.push(
      `export const ${name.slice(0, -5)} = ({ size = 'md',${
        name.slice(0, -5).endsWith('OI') ? " strokeWidth = '2'," : ''
      } ...otherProps }: IconProps): JSX.Element => {`,
    );
    lines.push(
      `  return <BaseIcon size={size} iconProps={Props.${name}} ${
        name.slice(0, -5).endsWith('OI') ? 'outline={true} strokeWidth={strokeWidth}' : 'outline={false}'
      } {...otherProps} />;`,
    );
    lines.push('};');
    lines.push('');
  });
  await writeFile('./src/components/Icons.tsx', lines.join('\n'), 'utf-8');
  console.log('Icons.tsx generated!');
};

void generateIcons();
