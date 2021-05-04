// Render Prop
import React from "react";
import { TextField, InputLabel } from "@material-ui/core";

type Props = {
  name: string;
  label: string;
  inputLabel: string;
  id: string;
};

const TextInput = ({ inputLabel, id, name, label }: Props) => (
  <>
    {inputLabel && (
      <InputLabel id={`${id}Label`} data-testid={`${id}Label`}>
        {inputLabel}
      </InputLabel>
    )}
    <TextField
      id={id}
      data-testid={id}
      label={!inputLabel && label}
      name={name}
    />
  </>
);

export { TextInput };
