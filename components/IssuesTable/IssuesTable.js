import { AnimatePresence, motion } from "framer-motion";
import { use, useState } from "react";

import Pagination from "./Pagination";
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
    page: 1,
    errorType: "Type Error :",
    errorDesc: "Cannot read properties of undefined (reading length)",
    errorLoc: "at eval (webpack-internal:///./pages/index.tsx:37:7)",
    status: "Error",
    numEvents: 105,
    usersEffected: 105,
  },
  {
    id: 9,
    page: 1,
    errorType: "Type Error :",
    errorDesc: "Cannot read properties of undefined (reading length)",
    errorLoc: "at eval (webpack-internal:///./pages/index.tsx:37:7)",
    status: "Error",
    numEvents: 105,
    usersEffected: 105,
  },
];

console.log(TABLE_DATA.length);

const IssuesTable = ({}) => {
  const [issuePosts, setIssuesPosts] = useState(TABLE_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(9);

  const indexOfLastPost = currentPage * recordsPerPage;
  const indexOfFirstPost = indexOfLastPost - recordsPerPage;
  const currentPosts = issuePosts.slice(indexOfFirstPost, indexOfLastPost);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

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
            {currentPosts.map((item) => {
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
            <div className="flex items-center lg:w-full lg:h-full md:w-fit md:h-fit md:p-8 lg:p-4 lg:ml-auto">
              <Pagination
                postsPerPage={recordsPerPage}
                totalPosts={TABLE_DATA.length}
                pageForward={goToNextPage}
                pageBack={goToPrevPage}
                currentPage={currentPage}
              />
            </div>
          </tbody>
        </table>
      </motion.div>
    </>
  );
};

export default IssuesTable;
