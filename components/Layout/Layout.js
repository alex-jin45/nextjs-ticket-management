import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation>
        <main className="">{children}</main>
      </Navigation>
    </>
  );
};

export default Layout;
