import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MainNav from "../components/MainNav";

const RootLayout = () => {
  return (
    <>
      <Header />
      <MainNav />
      <Outlet />
    </>
  );
};

export default RootLayout;
