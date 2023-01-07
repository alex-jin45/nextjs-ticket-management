import DashboardNav from "../DashboardNav/DashboardNav";

const Layout = ({ children }) => {
  return (
    <>
      <DashboardNav>
        <main className="">{children}</main>
      </DashboardNav>
    </>
  );
};

export default Layout;
