import React from "react";

import { Table, TableContainer, CircularProgress } from "@material-ui/core";

import { Body } from "./Body";
import { Head } from "./Head";
import { useStyles } from "./DefaultTable.styles";
import { ColumnDefinition } from "./types";

type Props = {
  data: any[];
  columnDefinitions: ColumnDefinition[];
  loading: boolean;
};

const DefaultTable = ({ data, columnDefinitions, loading }: Props) => {
  const classes = useStyles();

  return (
    <TableContainer>
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress />{" "}
        </div>
      ) : (
        <Table className={classes.table}>
          <Head columnDefinitions={columnDefinitions} />
          <Body data={data} columnDefinitions={columnDefinitions} />
        </Table>
      )}
    </TableContainer>
  );
};

export { DefaultTable };
