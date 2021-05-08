import { makeStyles, defaultTheme } from "../../helpers/makeThemedStyles";

const useStyles = makeStyles(
  {
    root: {
      padding: 10,
      marginLeft: 20,
      marginBottom: 20,
      textTransform: "capitalize",
      [`@media (max-width: ${defaultTheme.breakpoints.md}px)`]: {
        margin: "auto",
        width: "80%",
        padding: 5,
        marginTop: 20,
      },
    },
  },
  { name: "ResponsiveFormContainer" }
);

export { useStyles };
