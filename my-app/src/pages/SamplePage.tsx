import React from "react";
import { useRecoilValue } from "recoil";
import { Card, Typography } from "@material-ui/core";

import { userAtom } from "../recoil/age/age.atom";
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

const SampleDataTable = () => {
  const user = useRecoilValue(userAtom);
  return (
    <>
      <Card variant="outlined">
        <Typography variant="h3" component="h2" gutterBottom>
          User: {user.name}
        </Typography>
      </Card>
      <DefaultTable
        data={sampleData}
        columnDefinitions={sampleColumnDefinitions}
      />
    </>
  );
};

export { SampleDataTable };
