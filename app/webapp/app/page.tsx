import UserTable from "@/components/user-table";
import { Button } from "@ui5/webcomponents-react";

/**
 * 
 * @returns Main page
 */
export default async function Page() {
  const users = await fetch(
    "http://localhost:4004/odata/v4/service/users/Users"
  ).then((res) => res.json());

  return (
    <div>
      {users.value.map((user: any) => (
        <div key={user.ID}>{user.name}</div>
      ))}
      <Button design="Emphasized">Hello, World!</Button>
      <UserTable />
    </div>
  );
}
