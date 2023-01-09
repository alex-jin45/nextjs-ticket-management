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
];

const IssuesTable = ({}) => {
  return (
    <>
      <div className=" shadow-md border-2 bg-slate-50 mt-6">
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
        </table>
      </div>
    </>
  );
};

export default IssuesTable;
