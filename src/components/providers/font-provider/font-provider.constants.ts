export const FONT_FAMILY = {
  Poppins: {
    Light: 'Poppins-Light',
    Regular: 'Poppins-Regular',
    Medium: 'Poppins-Medium',
    SemiBold: 'Poppins-SemiBold',
    Bold: 'Poppins-Bold',
    ExtraBold: 'Poppins-ExtraBold',
    Italic: 'Poppins-Italic',
  },
  IBMPlexSerif: {
    Light: 'IBMPlexSerif-Light',
    Regular: 'IBMPlexSerif-Regular',
    Medium: 'IBMPlexSerif-Medium',
    SemiBold: 'IBMPlexSerif-SemiBold',
    Bold: 'IBMPlexSerif-Bold',
    Italic: 'IBMPlexSerif-Italic',
  },
} as const;

export const FONT_ASSETS = {
  // Poppins
  [FONT_FAMILY.Poppins.Light]: require('../../../assets/fonts/poppins/Poppins-Light.ttf'),
  [FONT_FAMILY.Poppins.Regular]: require('../../../assets/fonts/poppins/Poppins-Regular.ttf'),
  [FONT_FAMILY.Poppins.Medium]: require('../../../assets/fonts/poppins/Poppins-Medium.ttf'),
  [FONT_FAMILY.Poppins.SemiBold]: require('../../../assets/fonts/poppins/Poppins-SemiBold.ttf'),
  [FONT_FAMILY.Poppins.Bold]: require('../../../assets/fonts/poppins/Poppins-Bold.ttf'),
  [FONT_FAMILY.Poppins.ExtraBold]: require('../../../assets/fonts/poppins/Poppins-ExtraBold.ttf'),
  [FONT_FAMILY.Poppins.Italic]: require('../../../assets/fonts/poppins/Poppins-Italic.ttf'),
  // IBM Plex Serif
  [FONT_FAMILY.IBMPlexSerif.Light]: require('../../../assets/fonts/ibm-plex-serif/IBMPlexSerif-Light.ttf'),
  [FONT_FAMILY.IBMPlexSerif.Regular]: require('../../../assets/fonts/ibm-plex-serif/IBMPlexSerif-Regular.ttf'),
  [FONT_FAMILY.IBMPlexSerif.Medium]: require('../../../assets/fonts/ibm-plex-serif/IBMPlexSerif-Medium.ttf'),
  [FONT_FAMILY.IBMPlexSerif.SemiBold]: require('../../../assets/fonts/ibm-plex-serif/IBMPlexSerif-SemiBold.ttf'),
  [FONT_FAMILY.IBMPlexSerif.Bold]: require('../../../assets/fonts/ibm-plex-serif/IBMPlexSerif-Bold.ttf'),
  [FONT_FAMILY.IBMPlexSerif.Italic]: require('../../../assets/fonts/ibm-plex-serif/IBMPlexSerif-Italic.ttf'),
};

export const FONT_KEYS = Object.keys(FONT_ASSETS) as (keyof typeof FONT_ASSETS)[];
