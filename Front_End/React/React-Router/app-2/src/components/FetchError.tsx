import { useAsyncError } from "react-router-dom";

const FetchError = () => {
  const error = useAsyncError() as { message: string };

  return (
    <>
      <div
        style={{
          padding: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <h1 style={{ color: "#f44250" }}>An Error Occurred 💩</h1>
        <h2
          style={{
            padding: 10,
            borderBlockEnd: "5px solid #f44250",
          }}
        >
          {error.message}
        </h2>
      </div>
    </>
  );
};

export default FetchError;
