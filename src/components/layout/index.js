import { Outlet } from "react-router-dom";
import Header from "./Header";
import TopButton from "../@common/TopButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("loclo", location);

  useEffect(() => {
    if (location.pathname === "/") {
      return navigate("/movie/popular");
    }
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
