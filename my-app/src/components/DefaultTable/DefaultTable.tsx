import React from "react";

import { Table, TableContainer } from "@material-ui/core";

import { Body } from "./Body";
import { Head } from "./Head";
import { useStyles } from "./DefaultTable.styles";
import { ColumnDefinition } from "./types";

type Props = {
  data: any[];
  columnDefinitions: ColumnDefinition[];
};

const DefaultTable = ({ data, columnDefinitions }: Props) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table}>
        <Head columnDefinitions={columnDefinitions} />
        <Body data={data} columnDefinitions={columnDefinitions} />
      </Table>
    </TableContainer>
  );
};

export { DefaultTable };
