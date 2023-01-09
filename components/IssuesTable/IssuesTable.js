import TableRow from "./TableRow";

const IssuesTable = ({}) => {
  return (
    <>
      <div className=" border-4">
        <table className="w-full">
          <thead>
            <tr className="border-b-2">
              <th className="p-3 text-left">Issue</th>
              <th className="p-3 text-left">Level</th>
              <th className="p-3 text-left">Events</th>
              <th className="p-3 text-left">Users</th>
            </tr>
          </thead>
          <tbody className="">
            <TableRow />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IssuesTable;
