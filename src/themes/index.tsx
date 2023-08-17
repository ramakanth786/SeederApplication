import * as React from 'react';

import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface PaletteColor {
    600: string
    500: string
    400: string
    300: string
    200: string
    100: string
  }

  interface CustomPalette {
    accent: {
      lavender: string
      blue: string
      yellow: string
      pink: string
    }
    elevation: {
      color1: string
      color2: string
      color3: string
    }
  }

  interface CustomTypography {
    caption: React.CSSProperties
    title: React.CSSProperties
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface TypographyVariants extends CustomTypography {}
  interface TypographyVariantsOptions extends CustomTypography {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption: true
    title: true
  }
}

export const theme = createTheme({
  spacing: 4,
  palette: {
    action: {
      disabledBackground: '#6C5DD3',
      disabled: '#E8E8E9',
      disabledOpacity:0.56
    },
    mode:'dark',
    primary: {
      main: '#6C5DD3',
      '600': '#393552',
      '400': '#B4A9FF',
      '500': '#100F1C',
    },
    text: {
      primary: '#E8E7F0',
      secondary: '#C9C8CC',
      disabled: '#A5A5A6',
    },
    grey: {
      '800': '#19181C',
      '700': '#727080',
      '600': '#413F4D',
      '500': '#E8E8E9',
      '400': '#FFFFFF',
      '100': '#262529',
      '200': '#3A3A3D',
      '300': '#28272B',
    },
    accent: {
      lavender: '#CFC8FF',
      blue: '#A0D7E7',
      yellow: '#E5CB9B',
      pink: '#E39AB2',
    },
    elevation: {
      color1: '#201F24',
      color2: '#2D2D30',
      color3: "#222124"
    },
    background: {
      default: '#040407',
    },
  },
  typography: {
    fontFamily: 'Gilroy-Regular',
    h1: {
      fontSize: '28px',
      fontWeight: "bold",
      lineHeight: "34px",
    },
    h2: {
      fontSize: '24px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '29px',
    },
    h3: {
      fontSize: '18px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '150%',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '140%',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '17px',
    },
    caption: {
      fontFamily: 'Gilroy-Regular',
      fontSize: '12px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '15px',
    },
    button: {
      fontFamily: 'Gilroy-Regular',
      fontSize: '16px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '19px',
    },
    title: {
      fontFamily: 'Gilroy-Regular',
      fontSize: '36px',
      fontWeight: 700,
      fontStyle: 'normal',
      lineHeight: '42px',
    },
    
  },
  
  
})
export default theme
