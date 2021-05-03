import React from "react";
import { TableCell, TableHead, TableRow } from "@material-ui/core";

import { ColumnDefinition } from "./types";

type Props = {
  columnDefinitions: ColumnDefinition[];
};

const Head = ({ columnDefinitions }: Props): JSX.Element => {
  const headCells = columnDefinitions.map((key: ColumnDefinition) => (
    <TableCell key={key.dataKey}>{key.title || key.dataKey}</TableCell>
  ));
  return (
    <TableHead>
      <TableRow>{headCells}</TableRow>
    </TableHead>
  );
};

export { Head };
