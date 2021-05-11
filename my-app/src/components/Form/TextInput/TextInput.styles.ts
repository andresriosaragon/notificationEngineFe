import { makeStyles } from "../../helpers/makeThemedStyles";
import { genericInputStyle, genericLabelStyle } from "../genericInput.styles";

const useStyles = makeStyles(
  {
    root: { ...genericInputStyle },
    inputLabel: { ...genericLabelStyle, textTransform: "capitalize" },
  },
  { name: "TextInput" }
);

export { useStyles };
