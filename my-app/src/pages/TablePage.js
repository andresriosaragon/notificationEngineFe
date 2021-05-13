import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Typography } from "@material-ui/core";

import { DefaultTable } from "../components";
import { fetchSources } from "../features/source/sourceApiCalls";
import { sourcesSelector } from "../features/source/sourceSelectors";

const sampleColumnDefinitions = [
  { dataKey: "name", render: (row) => row.name, title: "Name" },
  {
    dataKey: "industry",
    render: (row) => row.industry,
    title: "Industry",
  },
];

const SampleDataTable = () => {
  const { loading, status, results } = useSelector(sourcesSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSources());
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
