import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import { MemberType } from "../server/fake_server";
import Members from "../components/Members";
import Loading from "../components/Loading";
import FetchError from "../components/FetchError";

type LoaderReturnType = [number, MemberType][];

const MembersPage = () => {
  const loaderData = useLoaderData() as { data: LoaderReturnType };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Await resolve={loaderData.data} errorElement={<FetchError />}>
          {(data) => <Members data={data} />}
        </Await>
      </Suspense>
    </>
  );
};

export default MembersPage;
