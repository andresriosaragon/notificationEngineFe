import { makeStyles, defaultTheme } from "../helpers/makeThemedStyles";

const useStyles = makeStyles(
  {
    table: {
      minWidth: 950,
      [`@media (max-width: ${defaultTheme.breakpoints.md}px)`]: {
        minWidth: 150,
      },
    },
    loading: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 40,
      height: 50,
      width: 40,
    },
  },
  { name: "ResponsiveFormContainer" }
);

export { useStyles };
