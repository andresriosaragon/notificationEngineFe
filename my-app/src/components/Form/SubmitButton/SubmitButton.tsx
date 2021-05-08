// Render Prop
import React from "react";

import { useStyles } from "./SubmitButton.styles";

interface Props {
  text?: string;
}

const SubmitButton = ({ text = "Submit" }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <button type="submit" className={classes.root}>
      {text}
    </button>
  );
};

export { SubmitButton };
