
const  aqua =               '#337ab7'; // eslint-disable-line
const  blue =               '#4169E1'; // eslint-disable-line
const  blue2 =              '#2B3446'; // eslint-disable-line
const  extralightGrey =     '#EEE';     // eslint-disable-line
const  grey3 =              '#C9CDD7'; // eslint-disable-line
const  white =              '#FFFFFF'; // eslint-disable-line
const  snow =               '#EEE9EE'; // eslint-disable-line
const  lightBlack =         '#333333';    // eslint-disable-line
const  shadow =             '#999'; // eslint-disable-line

export const clr = {
  negative: white,
  balance: grey3,
  closeSurveyHover: blue2,
  boxShadow: shadow,
  highlight: blue,
  link: aqua,
  extraLightBase: white,
  lightBase: extralightGrey,
  mediumBase: snow,
  base: lightBlack,
  footer: extralightGrey,
  footerText: lightBlack
};

export const breakpoints = {
  x: {
    full: '',
    wide: '50.00rem',
    narrow: '31.25rem'
  }
};

export const screenSize = {
  smartphone: '@media only screen and (max-width: 425px)',
  desktop: '@media only screen and (min-width: 768px)'
};
