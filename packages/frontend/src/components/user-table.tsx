"use client";

import { Button, Popover, Table } from "@ui5/webcomponents-react";
import { TableRow, TableCell, TableColumn } from "@ui5/webcomponents-react";
import Link from "next/link";

interface Props {
  data: any[];
}

export default function UserTable({ data }: Props) {
  return (
    <Table
      className="w-full"
      columns={
        <>
          <TableColumn>Label</TableColumn>
          <TableColumn>Created At</TableColumn>
          <TableColumn>Created By</TableColumn>
          <TableColumn>Actions</TableColumn>
        </>
      }>
      {data.map((user: any) => (
        <TableRow key={user.ID}>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.createdAt}</TableCell>
          <TableCell>{user.createdBy}</TableCell>
          <TableCell>
            <Button id={`edit-${user.ID}`} />
            <Popover
              className="footerPartNoPadding"
              headerText="Edit User"
              horizontalAlign="Center"
              onAfterClose={function _a() {}}
              onAfterOpen={function _a() {}}
              onBeforeClose={function _a() {}}
              onBeforeOpen={function _a() {}}
              opener={`edit-${user.ID}`}
              placementType="Bottom"
              verticalAlign="Center">
              <Link href={`/users/${user.ID}`}>
                <Button id={`edit-${user.ID}`} />
              </Link>
            </Popover>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
