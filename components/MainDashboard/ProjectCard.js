import { FaReact } from "react-icons/fa";
import Image from "next/image";

const ProjectCard = ({ title, issueNumber, last24, status }) => {
  // not sure how to do Icon

  return (
    <>
      <div className="flex  flex-col w-1/3 justify-center rounded-lg h-64 bg-red-500">
        <div className="block p-8">
          <div className="flex items-center gap-4 mb-6">
            <FaReact className="text-4xl text-blue-600" />
            <h4 className="text-xl">Frontend - Web</h4>

            <span className="flex text-sm rounded-xl ml-auto justify-center bg-blue-300 items-center w-16 h-8ml-auto">
              React
            </span>
          </div>

          <div className="flex gap-16 mb-8 items-center text-lg">
            <div className="flex flex-col ml-0 items-center">
              <h4>Total Issues</h4>
              <p>73</p>
            </div>
            <div className="flex flex-col items-center">
              <h4>Last 24h</h4>
              <p>12</p>
            </div>
            <span className="flex text-sm rounded-xl ml-auto justify-center bg-blue-300 items-center w-16 h-8">
              ERROR
            </span>
          </div>
          <hr />
          <div className="flex justify-center items-center mt-6">
            <button>View Issues</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
