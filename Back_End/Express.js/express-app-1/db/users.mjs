import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;

/**
 * get all users data
 * @returns { { users: { id: number, username: string, pin: string, admin: boolean }[] } }
 */
const read_data = () => {
  const data = fs.readFileSync(path.resolve(__dirname, "users.json"));
  return JSON.parse(data.toString());
};

/**
 * update all users data
 */
const write_data = (newData) => {
  fs.writeFileSync(
    path.resolve(__dirname, "users.json"),
    JSON.stringify(newData)
  );
};

export { read_data, write_data };
