import { DefaultTheme, DarkTheme } from '@react-navigation/native'

// LIGHT
export const myDefaultTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,

    themeColor: '#5C6BC0',

    containerBg: "#EFEFEF",
    headerColor:"#FFFFFF",
    borderBottomColor: '#3C3C3C',

    iconColor:"#3C3C3C",
    iconBgColor:"#FFFFFF",
    iconBorderColor:"rgba(0,0,0,.30)",
    iconSize: 20,

    titleSize: 32,
    textSize: 14,
    textColor:"#3C3C3C",

    smallButtonBgColor: '#FFFFFF',
    smallButtonIconColor: '#3C3C3C',
    smallButtonBorderColor: 'rgba(0,0,0,.20)',
    smallButtonIconColor2: 'yellow',

    bigButtonBgColor: '#5C6BC0',
    bigButtonIconTextColor: '#FFFFFF',
    bigButtonTextSize: 16,
    bigButtonAndroidRippleColor: 'rgba(0,0,0,.20)',
    bigButtonBorder: '#5C6BC0',

    imageItemBg: '#FFFFFF',
    imageItemTxt: '#3C3C3C',
    imageItemAndroidRippleColor: '#3C3C3C',

    colorSwitchThumb: '#3C3C3C',
    colorSwitchTrack: '#cccccc',

    // Card
    cardBg:"#FFFFFF",
    cardTitle: '#3C3C3C',
    cardText: '#3C3C3C',
    cardFavBtnIcn:  'rgba(0,0,0,.2)',
    cardFavBtnIcnS: '#3C3C3C',
    cardFavBtnBg:   '#FFFFFF',
    cardFavBtnBgS:  '#FFFFFF',
    cardShadows: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,
      elevation: 20
    },

    // Circle
    circleUntouchText: 'rgba(0,0,0,.25)',
    circleBackground: 'rgba(255,255,255,.90)',

    // PaymentsListItem
    pliBigTextSize: 18,
    pliSmallTextSize: 13,
    pliIconSize: 18,

    unsplashText: '#1C1C1C',
    unsplashTextBg: 'rgba(255,255,255,.50)'
  }
}

// DARK
export const myDarkTheme = {
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,

    themeColor: '#BABABA',

    containerBg: "#2C2C2C",
    headerColor:"#404040",
    borderBottomColor: '#BABABA',

    iconColor:"#BABABA",
    iconBgColor:"#3C3C3C",
    iconBorderColor:"#3C3C3C",
    iconSize: 20,

    titleSize: 32,
    textSize: 14,
    textColor:"#BABABA",

    smallButtonBgColor: '#1C1C1C',
    smallButtonIconColor: '#BABABA',
    smallButtonBorderColor: 'rgba(255,255,255,.20)',
    smallButtonIconColor2: 'yellow',

    bigButtonBgColor: '#1C1C1C',
    bigButtonIconTextColor: '#BABABA',
    bigButtonTextSize: 16,
    bigButtonAndroidRippleColor: 'rgba(255,255,255,.20)',
    bigButtonBorder: 'rgba(255,255,255,.25)',

    imageItemBg: '#3C3C3C',
    imageItemTxt: '#BABABA',
    imageItemAndroidRippleColor: '#BABABA',

    colorSwitchThumb: '#FFFFFF',
    colorSwitchTrack: '#CCCCCC',

    // Card
    cardBg:"#1C1C1C",
    cardTitle: '#BABABA',
    cardText: '#BABABA',
    cardFavBtnIcn:  'rgba(255,255,255,.2)',
    cardFavBtnIcnS: '#BABABA',
    cardFavBtnBg:   '#1C1C1C',
    cardFavBtnBgS:  '#1C1C1C',
    cardShadows: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5
    },

    // Circle
    circleUntouchText: 'rgba(255,255,255,.30)',
    circleBackground: 'rgba(0,0,0,.80)',

    // PaymentsListItem
    pliBigTextSize: 18,
    pliSmallTextSize: 13,
    pliIconSize: 18,

    unsplashText: '#ECECEC',
    unsplashTextBg: 'rgba(0,0,0,.50)'
  }
}
