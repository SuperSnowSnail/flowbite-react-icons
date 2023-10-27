import { writeFile } from 'node:fs/promises';
import * as Icons from '../components/Icons';

const generateStories = async (): Promise<void> => {
  const lines = [
    '// THIS FILE IS AUTO-GENERATED!',
    "// If you want to regenerate this file manually, run 'npm run generate:stories' from root project directory",
    "import React from 'react';",
    "import * as Icons from '../components/Icons';",
    "import { AdjustmentsHorizontalOI as Base } from '../components/Icons';",
    '',
    'export default {',
    "  title: 'Icons List',",
    '  component: Base,',
    '  argTypes: {',
    '    strokeWidth: {',
    "      control: { type: 'range', min: 0.1, max: 3, step: 0.1 },",
    '    },',
    '  },',
    '};',
    '',
  ];
  Object.keys(Icons)
    .sort()
    .forEach((name) => {
      lines.push(`export const ${name} = (args) => <Icons.${name} {...args} />`);
      lines.push('');
    });
  await writeFile('./src/stories/IconsList.stories.tsx', lines.join('\n'), 'utf-8');
  console.log('IconsList.stories.tsx generated!');
};

void generateStories();
