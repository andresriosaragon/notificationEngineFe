// Render Prop
import React from "react";
import {
  InputLabel,
  Select as MaterialSelect,
  MenuItem,
} from "@material-ui/core";

interface SelectOption {
  label: string;
  value: string | number;
}

type Props = {
  handleChange: (event: React.ChangeEvent<{ name?: string }>) => void;
  value: string | number;
  items: SelectOption[];
  name: string;
  label: string;
  id: string;
};

const Select = ({ handleChange, value, items, name, label, id }: Props) => {
  const menuItems = items.map((item: SelectOption) => (
    <MenuItem value={item.value} key={item.value} data-testid={`${id}value`}>
      {item.label}
    </MenuItem>
  ));
  return (
    <>
      <InputLabel id={`${id}InputLabel`} data-testid={`${id}InputLabel`}>
        {label}
      </InputLabel>
      <MaterialSelect
        labelId="demo-simple-select-label"
        id={id}
        data-testid={id}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {menuItems}
      </MaterialSelect>
    </>
  );
};

export { Select };
