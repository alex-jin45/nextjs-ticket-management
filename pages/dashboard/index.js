import Link from "next/link";

const DashboardPage = () => {
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <Link href="/">Home</Link>
        <Link href="/dashboard/issues">Home</Link>
      </div>
    </>
  );
};

export default DashboardPage;
