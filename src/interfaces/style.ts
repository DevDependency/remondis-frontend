export interface Props {
  theme: Theme;
  background?: string;
  color?: string;
  isSize?: boolean;
  width?: string;
  float?: string;
  isPopupVisible?: boolean;
  scrollDirection?: string;
  role?: string;
  bottom?: string;
}

export interface Theme {
  colors: Colors;
  fonts: Fonts;
  borderline: BorderLine;
  effects: Effects;
}

export interface Colors {
  tx_grey_main: string;
  tx_grey_secondary: string;
  red: string;
  red_hover: string;
  grey: string;
  grey_hover: string;
  white: string;
  blue_light: string;
  blue_dark: string;
  border: string;
}

export interface Fonts {
  default: string;
}

export interface BorderLine {
  border: string;
  errorBorder: string;
}

export interface Effects {
  shadow: string;
}
