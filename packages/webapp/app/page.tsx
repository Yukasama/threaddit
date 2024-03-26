import { getUsers } from "@/actions/get-users";
import UserTable from "@/components/user-table";
import { Button } from "@ui5/webcomponents-react";

/**
 *
 * @returns Main page
 */
export default async function Page() {
  const users = await getUsers();

  return (
    <div>
      <Button design="Emphasized">Hello, World!</Button>
      <UserTable data={users} />
    </div>
  );
}
