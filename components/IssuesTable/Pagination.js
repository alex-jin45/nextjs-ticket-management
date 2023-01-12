const Pagination = ({
  postsPerPage,
  totalPosts,
  pageForward,
  pageBack,
  currentPage,
}) => {
  return (
    <div className="py-2 ">
      <div>
        <p className="text-sm gap-4  flex  text-gray-700">
          Showing &nbsp;
          {currentPage * postsPerPage - 9}
          &nbsp; to
          <span className=""> {currentPage * postsPerPage} </span>
          of
          <span className=""> {totalPosts} </span>
          results
        </p>
      </div>

      <div className="">
        <ul
          className="flex justify-center  z-0 gap-8 mt-2 rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <li>
            <a
              onClick={() => {
                pageBack();
              }}
              className="flex w-32 justify-center items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm  text-gray-500 hover:bg-gray-50"
            >
              <span>Previous</span>
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                pageForward();
              }}
              className="flex w-32 justify-center items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm  text-gray-500 hover:bg-gray-50"
            >
              <span>Next</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
