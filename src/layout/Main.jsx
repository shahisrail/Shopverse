import { Outlet } from "react-router-dom";
import Navigatoin from "../Pages/NavBar/Navigatoin";
import Fotter from "../Pages/Footer/Fotter";

const Main = () => {
  return (
    <div>
      <Navigatoin></Navigatoin>
      <Outlet></Outlet>
      <Fotter />
    </div>
  );
};

export default Main;
