export const pureProfileIconFont = {
  fontFamily: 'Pureprofile',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontVariant: 'normal',
  textTransform: 'none',
  src: `url('/assets/fonts/Pureprofile.eot?9llwc0') format('eot'),
        url('/assets/fonts/Pureprofile.eot?9llwc0#iefix') format('embedded-opentype'),
        url('/assets/fonts/Pureprofile.ttf?9llwc0') format('truetype'),
        url('/assets/fonts/Pureprofile.woff?9llwc0') format('woff'),
        url('/assets/fonts/Pureprofile.svg?9llwc0#Pureprofile') format('svg')`
};

export const icons = {
  transactions32:   '"\\e971"', // eslint-disable-line
  close16:          '"\\e913"' // eslint-disable-line
};

export const getIcon = (icon) => {
  return {
    'fontFamily': pureProfileIconFont,
    'vertical-align': 'middle',
    ':before': {
      content: icon
    }
  };
};
