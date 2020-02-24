export const defaultTheme = {
  borders: {},
  borderStyles: {},
  borderWidths: {},
  colors: {
    bg: ['#ffffff', '#f8f8f8', '#efefef', '#e8e8e8'],
    text: ['#000000', '#404040', '#808080'],
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
  radii: {},
  shadows: {},
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
    canvas: 1,
    popover: 2,
    nav: 3,
    draw: 4,
    modal: 5,
  },
}

export const darkTheme = {
  ...defaultTheme,
  colors: {
    bg: ['#000000', '#404040', '#808080'],
    text: ['#ffffff', '#f8f8f8', '#efefef', '#e8e8e8'],
  },
}
