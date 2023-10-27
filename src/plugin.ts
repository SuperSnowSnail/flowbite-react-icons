const plugin = require('tailwindcss/plugin'); // eslint-disable-line

const customConfig = {
  safelist: [
    {
      pattern: /^h-.+/,
    },
    {
      pattern: /^w-.+/,
    },
  ],
};

module.exports = plugin(() => {}, customConfig);
