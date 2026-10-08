import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'cyber-lunar',
      values: [
        { name: 'cyber-lunar', value: '#0b1323' },
        { name: 'surface-dim', value: '#060e1e' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-[#0b1323] text-[#dbe2f9] font-sans antialiased p-6 sm:p-10 selection:bg-[#4efff3]/30 selection:text-white">
        <Story />
      </div>
    ),
  ],
};

export default preview;
