"use client";

import { Table } from "@ui5/webcomponents-react";
import { TableRow, TableCell, TableColumn } from "@ui5/webcomponents-react";

export default function UserTable() {
  return (
    <Table
      color="#000000"
      className="bg-black"
      columns={
        <>
          <TableColumn>Label</TableColumn>
          <TableColumn>Label</TableColumn>
          <TableColumn>Label</TableColumn>
        </>
      }>
      <TableRow>
        <TableCell className="bg-black">Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell 4</TableCell>
        <TableCell>Cell 5</TableCell>
        <TableCell>Cell 6</TableCell>
      </TableRow>
    </Table>
  );
}
