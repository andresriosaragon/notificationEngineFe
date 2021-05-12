import { makeStyles } from "./components/helpers/makeThemedStyles";

const useStyles = makeStyles(
  {
    root: { display: "flex", flexDirection: "row" },
    menu: {
      flexGrow: 1,
      margin: 0,
      "& a": { textDecoration: "none", color: "black" },
    },
    main: { flexGrow: 30, margin: 0 },
  },
  { name: "Index" }
);

export { useStyles };
