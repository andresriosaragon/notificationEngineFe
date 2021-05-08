import { makeStyles, defaultTheme } from "../../helpers/makeThemedStyles";

const useStyles = makeStyles(
  {
    root: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "90%",
    },

    fieldContainer: {
      paddingLeft: "3%",
      paddingTop: "3%",
      paddingBottom: "3%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      [`@media (max-width: ${defaultTheme.breakpoints.md}px)`]: {
        margin: "auto",
        width: "80%",
        flexDirection: "column",
        padding: "10%",
      },
    },
  },
  { name: "ResponsiveFormContainer" }
);

export { useStyles };
