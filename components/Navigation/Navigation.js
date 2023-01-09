import Link from "next/link";
import { useRouter } from "next/router";

// nav bar from https://larainfo.com/blogs/tailwind-css-simple-sidebar-ui-example

const Navigation = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex font-mono">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <h2 className="text-3xl font-semibold text-center text-blue-800">
          TBD NAME
        </h2>

        <div className="flex flex-col justify-between mt-6">
          <aside>
            <nav>
              <ul>
                <li>
                  <Link
                    className={`flex items-center px-4 py-2 text-gray-700 active:bg-gray-400 rounded-md ${
                      router.pathname === "/dashboard" ? "bg-gray-400" : null
                    }`}
                    href="/dashboard"
                  >
                    <span className="mx-4 font-medium">Dashboard</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className={`flex items-center px-4 py-2 mt-5 text-gray-800 rounded-md hover:bg-gray-200 ${
                      router.pathname === "/dashboard/issues"
                        ? "bg-gray-400"
                        : null
                    }`}
                    href="/dashboard/issues"
                  >
                    <span className="mx-4 font-medium">Issues</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200 ${
                      router.pathname === "/dashboard/activity"
                        ? "bg-gray-400"
                        : null
                    }`}
                    href="/dashboard/activity"
                  >
                    <span className="mx-4 font-medium">Activity</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200 ${
                      router.pathname === "/dashboard/settings"
                        ? "bg-gray-400"
                        : null
                    }`}
                    href="/dashboard/settings"
                  >
                    <span className="mx-4 font-medium">Settings</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
      <div className="w-full h-full p-4 m-8 overflow-y-auto">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Navigation;
