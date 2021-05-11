import { makeStyles, defaultTheme } from "../helpers/makeThemedStyles";

const useStyles = makeStyles(
  {
    table: {
      minWidth: 950,
      [`@media (max-width: ${defaultTheme.breakpoints.md}px)`]: {
        minWidth: 150,
      },
    },
  },
  { name: "ResponsiveFormContainer" }
);

export { useStyles };
