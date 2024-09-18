import Header from "./Header";
import MainNav from "./MainNav";

const ErrorBoundary = () => {
  return (
    <>
      <Header />
      <MainNav />
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
          Please reload the page
        </h2>
      </div>
    </>
  );
};

export default ErrorBoundary;
