import IssuesTable from "../../../components/IssuesTable/IssuesTable";

const IssuesPage = ({}) => {
  return (
    <>
      <div>
        <h1 className="text-3xl mb-4">Issues</h1>
        <p className=" text-sm text-gray-400">
          Over of error, warning and events logged from your projects.
        </p>
        <IssuesTable />
      </div>
    </>
  );
};

export default IssuesPage;
