import { Link, Outlet } from "react-router-dom";
import CustomFooter from './CustomFooter'
import Header from './Header'


const Layout = () => {
  return (
    <>
    <Header />
      <br />
      <Outlet />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    <CustomFooter />
    </>
  );
};

export default Layout;