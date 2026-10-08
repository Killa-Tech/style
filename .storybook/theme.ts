import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  
  // Brand
  brandTitle: 'KILLA // CYBER LUNAR',
  brandUrl: '/',
  brandImage: '/logo/logo-LUNA-MONTAIN.png',
  brandTarget: '_self',

  // Colors
  colorPrimary: '#4efff3',
  colorSecondary: '#4efff3',

  // UI
  appBg: '#060e1e',
  appContentBg: '#0b1323',
  appPreviewBg: '#0b1323',
  appBorderColor: 'rgba(163, 184, 204, 0.15)',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Inter", system-ui, sans-serif',
  fontCode: 'ui-monospace, monospace',

  // Text colors
  textColor: '#dbe2f9',
  textInverseColor: '#0b1323',
  textMutedColor: '#849492',

  // Toolbar & Tabs
  barTextColor: '#a3b8cc',
  barSelectedColor: '#4efff3',
  barBg: '#0f192c',
  barHoverColor: '#4efff3',

  // Form colors
  inputBg: '#141b2c',
  inputBorder: 'rgba(163, 184, 204, 0.25)',
  inputTextColor: '#ffffff',
  inputBorderRadius: 6,
});
