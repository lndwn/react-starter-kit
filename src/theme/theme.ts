import colors from 'open-color'

export const defaultTheme = {
  borders: {},
  borderStyles: {},
  borderWidths: {},
  colors: {
    bg: colors.gray,
    text: [...colors.gray].reverse(),
    blacks: colors.gray,
    whites: [...colors.gray].reverse(),
    accent: '#32cd32',
    success: '#32cd32',
    error: '#ff4500',
  },
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '3rem',
    '5rem',
  ],
  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  letterSpacings: {
    normal: '0em',
    tracked: '0.1em',
    megaTracked: '0.15em',
  },
  lineHeights: {
    solid: 1,
    heading: 1.15,
    smallHeading: 1.25,
    copy: 1.5,
  },
  radii: {
    full: '999px',
    nano: '0.125rem',
    micro: '0.25rem',
    small: '0.5rem',
    medium: '0.75rem',
    large: '1rem',
  },
  shadows: {
    canvas: '0 2px 8px rgba(0,0,0,0.1)',
    popover: '0 3px 6px 2px rgba(0,0,0,0.15)',
    nav: '0 6px 8px 3px rgba(0,0,0,0.20)',
    draw: '0 8px 12px 4px rgba(0,0,0,0.25)',
    modal: '0 12px 16px 6px rgba(0, 0, 0, 0.3)',
  },
  sizes: ['1rem', '2rem', '3rem', '5rem', '8rem', '13rem', '21rem', '34rem'],
  space: [
    '0.125rem',
    '0.25rem',
    '0.5rem',
    '1rem',
    '1.5rem',
    '2rem',
    '3rem',
    '5rem',
    '8rem',
  ],
  zIndices: {
    canvas: 0,
    popover: 100,
    nav: 300,
    draw: 400,
    modal: 500,
  },
}

export const darkTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    bg: [...defaultTheme.colors.text],
    text: [...defaultTheme.colors.bg],
  },
}
