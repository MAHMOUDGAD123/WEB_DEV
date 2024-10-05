import { Await, useLoaderData } from "react-router-dom";
import { MemberType } from "../server/fake_server";
import { Suspense } from "react";
import Loading from "./Loading";
import MemberCard from "./MemberCard";
import FetchError from "./FetchError";

const MemberInfo = () => {
  const loaderData = useLoaderData() as { data: MemberType };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Await resolve={loaderData.data} errorElement={<FetchError />}>
          {(data) => <MemberCard data={data} />}
        </Await>
      </Suspense>
    </>
  );
};

export default MemberInfo;
