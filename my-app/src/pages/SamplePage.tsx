import React from "react";

import { DefaultTable } from "../components";

const sampleData = [
  { name: "first", description: "desc", id: 1 },
  { name: "first1", description: "desc1", id: 2 },
  { name: "first2", description: "desc2", id: 3 },
  { name: "first3", description: "desc3", id: 4 },
];

const sampleColumnDefinitions = [
  { dataKey: "name", render: (row: any) => row.name, title: "Name" },
  { dataKey: "description", render: (row: any) => row.description },
];

const SampleDataTable = () => (
  <DefaultTable data={sampleData} columnDefinitions={sampleColumnDefinitions} />
);

export { SampleDataTable };
