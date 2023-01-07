import Link from "next/link";

// nav bar from https://larainfo.com/blogs/tailwind-css-simple-sidebar-ui-example

const DashboardNav = ({ children }) => {
  return (
    <div className="flex font-mono">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <h2 className="text-3xl font-semibold text-center text-blue-800">
          TBD NAME
        </h2>

        <div className="flex flex-col justify-between mt-6">
          <aside>
            <ul>
              <li>
                <Link
                  className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md "
                  href="/"
                >
                  <span className="mx-4 font-medium">Dashboard</span>
                </Link>
              </li>

              <li>
                <Link
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                  href="dashboard/issues"
                >
                  <span className="mx-4 font-medium">Issues</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                  href="/"
                >
                  <span className="mx-4 font-medium" href="/">
                    Activity
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                  href="/"
                >
                  <span className="mx-4 font-medium" href="/">
                    Settings
                  </span>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
      <div className="w-full h-full p-4 m-8 overflow-y-auto">
        <div className="flex items-center justify-center p-40 ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardNav;
