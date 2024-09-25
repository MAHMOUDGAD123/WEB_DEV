import { read_data } from "../db/users.mjs";
import bcrypt from "bcrypt";

/**
 * get the user data using the id
 * @param { number } id
 * @returns { { id: number, username: string, pin: string, admin: boolean } }
 */
export const getUserById = (id) => {
  return read_data().users.find((user) => user.id === id);
};
