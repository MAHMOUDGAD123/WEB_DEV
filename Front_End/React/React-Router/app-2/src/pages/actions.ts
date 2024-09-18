import { redirect } from "react-router-dom";
import { server } from "../server/fake_server";

type FormDataType = {
  name: string;
  age: number;
  phone: string;
  country: string;
  job: string;
};

export const addNewFormAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as unknown as FormDataType;
  server.addMember(data);
  return redirect("/members");
};
