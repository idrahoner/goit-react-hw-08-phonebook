export const theme = Object.freeze({
  borders: { none: 'none', normal: '2px solid black' },
  colors: {
    dark: '#000',
    light: '#fff',
    accent: '#ec3515',
    disabled: '#999',
    textColor: '#2e2e2e',
    blue: 'cornflowerblue',
  },
  fontSizes: {
    xs: 12,
    s: 16,
    m: 24,
    l: 32,
    xl: 36,
    xxl: 64,
  },
  fontWeights: { normal: 400, bold: 700 },
  opacities: { none: 0, half: 0.6, full: 1 },
  radii: { none: 'none', normal: 5, circle: '50%' },
  shadows: {
    light: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  },
  sizes: { scaleUp: 1.1, scaleDown: 0.9 },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  transitions: {
    regularScale: 'scale 250ms linear',
    regularBgColor: 'background-color 250ms linear',
  },
  breakpoints: ['768px', '1280px'],
});
