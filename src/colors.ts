//COLOR COLLECTIONS

import {DefaultTheme} from '@react-navigation/native';

export const COLORS = {
  //DONOT REMOVE
  screenBackgroundColor: '#fff',

  primary: '#2190C0',

  //GREY COLORS SHADES
  gray: '#898B9A',

  borderGray: '#EAECF0',
  appGray: '#344054',

  whiteGray: '#e5e5e5',

  lineGray: 'rgba(255, 255, 255, 0.16)',
  textWhiteOpac: 'rgba(255, 255, 255, 0.8)',
  inputBg: 'rgba(255, 255, 255, 0.07)',
  // RESPONSE COLORS SHADES
  warning: '#FFAB07',
  warningDark: '#B54708',
  danger: '#E43E3E',

  dangerDark: '#B42318',
  success: '#12B76A',
  successDark: '#027A48',
  darkText: '#29335C',
  tabBarBlack: '#070707',
  darkBlack: '#000',
  black: '#1E1F20',
  white: '#FFFFFF',

  BorderWhiteBlur: 'rgba(255, 255, 255, 0.16)',
  loaderBg: 'rgba(0, 0, 0, 0.6)',
  lighterGray: '#BEC2CE',
  vividCyan: '#18D9F2',
  purple: '#161618',
  tabBarGrey: '#9C9C9C',
  darkChatText: '#26292E',

  gray1: '#D0D5DD',
  gray2: '#101828',
  gray3: '#EEEEEE',
  gray4: '#505050',
  bgGradient: {
    flouorescentBlueOpac: '#18D9F31A',
    flouorescentBlue: '#18D9F200',
  },

  headerGradient: {
    blue: '#293052',
    pink: '#B48F8E',
  },
  cardGradient: {
    pink: '#293052',
    blue: '#B48F8E',
    opacBlue: '#B48F8EB2',
    opacPink: '#293052B2',
  },

  blackText: '#262626',

  blueText: '#414F7E',
  darkBlueText: '#29335C',
  redText: '#DF2020',
  blueBorder: '#414F7E80',

  tabBackground: '#B6858233',
  border: '#88888833',

  shadow: '#5A5A5A',
  headerShadow: '#1C1C1C',
  toastBgSuccess: '#D9FCDE',
  toasttextSuccess: '#005339',
  toastBgError: '#FFE5E5',
  toastTextError: '#FF0000',

  transparentBorder: 'rgba(255,255,255,0)',
  blurWhite: 'rgba(255, 255, 255, 0.07)',
  blurWhiteText: 'rgba(255, 255, 255, 0.8)',

  //
  fluorescentBlue: '#18D9F2',
  yellowGreen: '#38B80E',
  semiTransparentGreen: '#38B80E29',
  transparentGreen: '#38B80E00',
  beer: '#F8961E',
  semiTransparentbeer: '#F8961E29',
  transparentbeer: '#F8961E00',
  blueBonnet: '#2A26FF',
  semiTransparentBlueBonnet: '#2A26FF29',
  transparentBlueBonnet: '#2A26FF00',
  transparent: 'transparent',
  charLestonGreen: '#2C2C2C',
  transparentBlue: '#18D9F24D',
  semiTransparentWhite: '#FFFFFF29',
  cream: '#FFFFFFCC',
  shadowBlack: '0C0C0D',
};

export const statusBarStyle = 'dark-content'; //light-content || dark-content

export const NavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.screenBackgroundColor,
  },
};
