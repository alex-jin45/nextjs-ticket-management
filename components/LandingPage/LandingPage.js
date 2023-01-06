import Link from "next/link";

const LandingPage = ({}) => {
  return (
    <>
      <div className="bg-red-500">
        <nav>
          <ul className="flex justify-between">
            <li>TBD NAME</li>
            <li className="mr-10">
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default LandingPage;
