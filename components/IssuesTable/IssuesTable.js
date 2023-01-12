import Pagination from "./Pagination";
import { TABLE_DATA } from "../../data/issues";
import TableRow from "./TableRow";
import { motion } from "framer-motion";
import { useState } from "react";

const IssuesTable = ({}) => {
  const [issuePosts, setIssuesPosts] = useState(TABLE_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
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
        animate={{ y: 15 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-11/12 h-full overflow-y-hiddden mt-4"
      >
        <table className="lg:w-full bg-slate-100 border-2 shadow-md   lg:h-full md:w-fit md:h-fit">
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
          </tbody>
        </table>
        <div className="flex justify-center items-center pt-4 ">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={issuePosts.length}
            pageForward={goToNextPage}
            pageBack={goToPrevPage}
            currentPage={currentPage}
          />
        </div>
      </motion.div>
    </>
  );
};

export default IssuesTable;
