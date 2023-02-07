import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
