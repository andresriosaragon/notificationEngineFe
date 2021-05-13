import React from "react";
import { Select } from "./Select";

export default {
  title: "components/Select",
  component: Select,
  argTypes: {
    items: { control: "items" },
  },
};

const exampleValues = [
  {
    label: "test",
    value: 1,
  },
];

const exampleValues2 = [
  {
    label: "test1",
    value: 1,
  },
  {
    label: "test2",
    value: 2,
  },
];

const Template = (args) => <Select {...args} />;

export const DefaultSelect = Template.bind({});

DefaultSelect.args = {
  handleChange: () => {},
  value: "test",
  items: exampleValues,
  name: "test",
  label: "test",
  id: "test",
};

DefaultSelect.parameters = {
  values: [
    { name: "singleOptions", value: exampleValues },
    { name: "doubleOptions", value: exampleValues2 },
  ],
};
