import { AnimatePresence, motion } from "framer-motion";

import TableRow from "./TableRow";

const TABLE_DATA = [
  {
    id: 1,
    page: 1,
    errorType: "Type Error :",
    errorDesc: "Cannot read properties of undefined (reading length)",
    errorLoc: "at eval (webpack-internal:///./pages/index.tsx:37:7)",
    status: "Error",
    numEvents: 105,
    usersEffected: 105,
  },
  {
    id: 2,
    page: 1,
    errorType: "Type Error :",
    errorDesc: "Cannot read properties of undefined (reading length)",
    errorLoc: "at eval (webpack-internal:///./pages/index.tsx:37:7)",
    status: "Error",
    numEvents: 105,
    usersEffected: 105,
  },
  {
    id: 3,
    page: 1,
    errorType: "Type Error :",
    errorDesc: "Cannot read properties of undefined (reading length)",
    errorLoc: "at eval (webpack-internal:///./pages/index.tsx:37:7)",
    status: "Error",
    numEvents: 105,
    usersEffected: 105,
  },
  {
    id: 4,
    page: 1,
    errorType: "Type Error :",
    errorDesc: "Cannot read properties of undefined (reading length)",
    errorLoc: "at eval (webpack-internal:///./pages/index.tsx:37:7)",
    status: "Error",
    numEvents: 105,
    usersEffected: 105,
  },
  {
    id: 5,
    page: 1,
    errorType: "Type Error :",
    errorDesc: "Cannot read properties of undefined (reading length)",
    errorLoc: "at eval (webpack-internal:///./pages/index.tsx:37:7)",
    status: "Error",
    numEvents: 105,
    usersEffected: 105,
  },
  {
    id: 6,
    page: 1,
    errorType: "Type Error :",
    errorDesc: "Cannot read properties of undefined (reading length)",
    errorLoc: "at eval (webpack-internal:///./pages/index.tsx:37:7)",
    status: "Error",
    numEvents: 105,
    usersEffected: 105,
  },
  {
    id: 7,
    page: 1,
    errorType: "Type Error :",
    errorDesc: "Cannot read properties of undefined (reading length)",
    errorLoc: "at eval (webpack-internal:///./pages/index.tsx:37:7)",
    status: "Error",
    numEvents: 105,
    usersEffected: 105,
  },
  {
    id: 8,
    page: 2,
    errorType: "Type Error :",
    errorDesc: "Cannot read properties of undefined (reading length)",
    errorLoc: "at eval (webpack-internal:///./pages/index.tsx:37:7)",
    status: "Error",
    numEvents: 105,
    usersEffected: 105,
  },
  {
    id: 9,
    page: 2,
    errorType: "Type Error :",
    errorDesc: "Cannot read properties of undefined (reading length)",
    errorLoc: "at eval (webpack-internal:///./pages/index.tsx:37:7)",
    status: "Error",
    numEvents: 105,
    usersEffected: 105,
  },
];

const IssuesTable = ({}) => {
  return (
    <>
      <motion.div
        animate={{ y: 12 }}
        className="w-full h-screen shadow-md border-2 bg-slate-50 mt-4"
      >
        <table className="lg:w-full lg:h-full md:w-fit md:h-fit">
          <thead>
            <tr className="border-b-2">
              <th className="p-3 text-left">Issue</th>
              <th className="p-3 text-left">Level</th>
              <th className="p-3 text-left">Events</th>
              <th className="p-3 text-left">Users</th>
            </tr>
          </thead>
          <tbody className="">
            {TABLE_DATA.map((item) => {
              return (
                <TableRow
                  key={item.id}
                  errorType={item.errorType}
                  errorDesc={item.errorDesc}
                  errorLoc={item.errorLoc}
                  status={item.status}
                  numEvents={item.numEvents}
                  usersEffected={item.usersEffected}
                />
              );
            })}
          </tbody>
          <div className="flex items-center lg:w-full lg:h-full md:w-fit md:h-fit md:p-8">
            <button className="ml-auto ">Next Page</button>
          </div>
        </table>
      </motion.div>
    </>
  );
};

export default IssuesTable;
