export type Color = { DEFAULT: string; [key: string]: string };

export type Palette = { [key: string]: Color };

export type Theme = {
  palette: Palette;
  fontFamilies: {
    display: string;
    body: string;
  };
};

export type Themes = {
  light: Theme;
  dark: Theme;
};
