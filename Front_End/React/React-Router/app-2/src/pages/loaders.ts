import { server } from "../server/fake_server";
import { defer } from "react-router-dom";

export const membersLoader = async () => {
  return defer({ data: server.getMemberEntries() });
};

export const memberLoader = async ({ params }) => {
  return defer({ data: server.getMember(+params.id) });
};
