import Link from "next/link";
import ProjectCard from "../../components/MainDashboard/ProjectCard";

export const DUMMY_DATA = [
  {
    id: 1,
    title: "Frontend -",
    issueNumber: 73,
    last24: 12,
    lang: "React",
    status: "Error",
  },
  {
    id: 2,
    title: "Backend -",
    issueNumber: 25,
    last24: 2,
    lang: "Node.js",
    status: "Warning",
  },
  {
    id: 3,
    title: "ML Services -",
    issueNumber: 0,
    last24: 0,
    lang: "Python",
    status: "Info",
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
      {DUMMY_DATA.map((card) => {
        return (
          <ProjectCard
            key={card.id}
            lang={card.lang}
            last24={card.last24}
            title={card.title}
            status={card.status}
            issueNumber={card.issueNumber}
          />
        );
      })}
    </>
  );
};

export default DashboardPage;
