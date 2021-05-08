import makeStyles from "@material-ui/styles/makeStyles";

interface TypographySize {
  fontSize: string;
  lineHeight: string;
}

interface Typography {
  fonts: {
    primary: string;
  };
  sizes: {
    xl: TypographySize;
    lg: TypographySize;
    md: TypographySize;
    sm: TypographySize;
  };
  weights: {
    bold: number;
    medium: number;
    regular: number;
  };
}

interface Breakpoints {
  xl: number;
  lg: number;
  xs: number;
  md: number;
  sm: number;
}

const typography: Typography = {
  fonts: {
    primary: '"Roboto"',
  },
  weights: {
    bold: 700,
    medium: 500,
    regular: 400,
  },
  sizes: {
    xl: {
      fontSize: "2rem",
      lineHeight: "2.8rem",
    },
    lg: {
      fontSize: "1.8rem",
      lineHeight: "2.4rem",
    },
    md: {
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
    },
    sm: {
      fontSize: "1.4rem",
      lineHeight: "2rem",
    },
  },
};

const breakpoints: Breakpoints = {
  xl: 1280,
  lg: 1024,
  xs: 0,
  md: 768,
  sm: 375,
};

const colors = {
  blue1: "#F3F9FF",
  blue2: "#4284C4",
  blue3: "#124D86",
  green1: "#EFFCF1",
  green2: "#33CD49",
  green3: "#186624",
  red1: "#FFE3E3",
  red2: "#EC4545",
  red3: "#930000",
  gray1: "#FFFFFF",
  gray2: "#E8E8E8",
  gray3: "#8C8C8C",
};

const flex = {
  spacedEvenlyRow: {
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  alignStartRow: {
    marginLeft: 20,
    // display: "flex",
    flexDirection: "row",
    // justifyContent: "flex-start",
  },
  defaultColumn: {
    margin: "auto",
    width: "80%",
    display: "flex",
    flexDirection: "column",
  },
};

const defaultTheme = {
  breakpoints,
  typography,
  colors,
  flex,
};

export { makeStyles, defaultTheme };
