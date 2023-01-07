import { use, useState } from "react";

import Link from "next/link";

const LandingPage = ({}) => {
  const [logged, setLogged] = useState(false);

  const logHandler = () => {
    setLogged(true);
    console.log("done");
  };

  return (
    <>
      <div className="bg-red-500">
        <nav>
          <ul className="flex justify-between">
            <li>TBD NAME</li>
            <li className="mr-10">
              {!logged ? <button onClick={logHandler}>Log In</button> : null}
              {logged ? <Link href="/dashboard">Dashboard</Link> : null}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default LandingPage;
