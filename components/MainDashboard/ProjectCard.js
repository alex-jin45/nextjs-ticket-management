import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";

const ProjectCard = ({ title, issueNumber, last24, status, lang }) => {
  // not sure how to do Icon - maybe useState?

  return (
    <>
      <div className="inline-block  ">
        <div className="flex shadow-lg ml-5 mt-8 justify-center rounded-lg h-64 bg-red-500">
          <div className="block p-8">
            <div className="flex items-center gap-4 mb-8">
              <FaReact className=" text-blue-600 bg-red-100 rounded-full w-10 h-10 " />
              <h4 className="text-xl">{title}</h4>
              <p className="items-center text-lg">{lang}</p>

              {/* not sure if I want to display the lang as a
               pill or next to the title */}
              {/* <span className="flex flex-col text-sm rounded-xl ml-auto justify-center bg-blue-300 items-center w-16 h-8ml-auto">
                {lang}
              </span> */}
            </div>

            <div className="flex gap-16 mb-8 items-center text-xl">
              <div className="flex flex-col ml-0 items-center">
                <h4>Total Issues</h4>
                <p>{issueNumber}</p>
              </div>
              <div className="flex flex-col items-center">
                <h4>Last 24h</h4>
                <p>{last24}</p>
              </div>
              <span className="flex text-sm rounded-xl ml-auto justify-center bg-blue-300 items-center w-16 h-8">
                {status}
              </span>
            </div>
            <hr />
            <div className="flex justify-center items-center mt-6">
              <button className="text-white">View Issues</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
