import Link from "next/link";
import ProjectCard from "../../components/MainDashboard/ProjectCard";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Frontend - Web",
    issueNumber: 73,
    last24: 12,
    status: "Error",
  },
  {
    id: 2,
    title: "Backend",
    issueNumber: 73,
    last24: 12,
    status: "Error",
  },
  {
    id: 3,
    title: "Frontend - Web",
    issueNumber: 73,
    last24: 12,
    status: "Error",
  },
];

const DashboardPage = () => {
  return (
    <>
      <div>
        {/* maybe put into own component */}
        <h1 className="text-2xl mb-4">Projects</h1>
        <span className="text-sm text-gray-400">
          Overview of your projects sorted by total issues.
        </span>
      </div>
      <ProjectCard />
    </>
  );
};

export default DashboardPage;
