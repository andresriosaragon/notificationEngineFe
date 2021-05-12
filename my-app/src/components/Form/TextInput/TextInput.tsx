// Render Prop
import React from "react";
import { TextField, InputLabel } from "@material-ui/core";

import { useStyles } from "./TextInput.styles";

type Props = {
  name: string;
  label: string;
  inputLabel?: string;
  id: string;
  handleChange: (event: React.ChangeEvent<{ name?: string }>) => void;
};

const TextInput = ({ inputLabel, id, name, label, handleChange }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {inputLabel && (
        <InputLabel
          id={`${id}Label`}
          data-testid={`${id}Label`}
          className={classes.inputLabel}
        >
          {label}
        </InputLabel>
      )}
      <TextField
        id={id}
        data-testid={id}
        label={!inputLabel && label}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export { TextInput };
