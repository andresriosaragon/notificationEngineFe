import React from "react";
import { TableBody, TableCell, TableRow } from "@material-ui/core";

import { ColumnDefinition } from "./types";

type Props = {
  data: any[];
  columnDefinitions: ColumnDefinition[];
};

const Body = ({ data, columnDefinitions }: Props): JSX.Element => (
  <TableBody>
    {data.map((row) => (
      <TableRow key={row.id}>
        {columnDefinitions.map((key: ColumnDefinition) => (
          <TableCell key={`${row.id}${key.dataKey}`}>
            {key.render ? key.render(row) : row[key.dataKey]}
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
);

export { Body };
