import React from "react";
import Card from "@material-ui/core/Card";

import { SubmitButton } from "../SubmitButton/SubmitButton";
import { useStyles } from "./ResponsiveFormContainer.styles";

interface Props {
  children: JSX.Element[];
  cancel?: Boolean;
}

const ResponsiveFormContainer = ({ children, cancel }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <div className={classes.fieldContainer}>{children}</div>
      <div className={classes.fieldContainer}>
        {cancel && <SubmitButton text="cancel" />}
        <SubmitButton />
      </div>
    </Card>
  );
};

export { ResponsiveFormContainer };
