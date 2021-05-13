import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Typography } from "@material-ui/core";

import { DefaultTable } from "../components";
import { fetchSource } from "../features/source/sourceApiCalls";
import { sourceSelector } from "../features/source/sourceSelectors";

const sampleColumnDefinitions = [
  { dataKey: "name", render: (row) => row.name, title: "Name" },
  { dataKey: "description", render: (row) => row.description },
];

const SampleDataTable = () => {
  const { loading, status, results } = useSelector(sourceSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSource());
    }
  }, [status, dispatch]);
  return (
    <>
      <Card variant="outlined">
        <Typography variant="h3" component="h2" gutterBottom>
          User
        </Typography>
      </Card>
      <DefaultTable
        data={results}
        columnDefinitions={sampleColumnDefinitions}
        loading={loading}
      />
    </>
  );
};

export { SampleDataTable };
