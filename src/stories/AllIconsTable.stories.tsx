import React from 'react';
import BaseIcon from '../components/BaseIcon';
import * as Props from '../components/iconsProps';

export default {
  title: 'All icons',
  component: BaseIcon,
  argTypes: {
    iconProps: {
      table: {
        disable: true,
      },
    },
    outline: {
      table: {
        disable: true,
      },
    },
    strokeWidth: {
      control: { type: 'range', min: 0.1, max: 3, step: 0.1 },
    },
  },
};

export const Table = (args) => (
  <div className="flex gap-4 flex-wrap">
    {Object.entries(Props)
      .sort((props1, props2) => {
        if (props1[0] > props2[0]) {
          return 1;
        }
        if (props1[0] < props2[0]) {
          return -1;
        }
        return 0;
      })
      .map(([propsName, props], index) => {
        const iconName = propsName.slice(0, -5);
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 p-2 border rounded-lg min-w-[200px]"
          >
            <BaseIcon iconProps={props} outline={iconName.endsWith('OI')} {...args} />
            <h6>{iconName}</h6>
          </div>
        );
      })}
  </div>
);
