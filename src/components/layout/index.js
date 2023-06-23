import { Outlet } from "react-router-dom";
import Header from "./Header";
import TopButton from "../@common/TopButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/movie/popular");
  }, []);

  return (
    <>
      <Header />
      <TopButton />
      <Outlet />
    </>
  );
};
export default Layout;
