"use server";

export const getUsers = async () => {
  const users = await fetch(
    "http://localhost:4004/odata/v4/service/users/Users"
  ).then((res) => res.json());

  return users.value;
};
