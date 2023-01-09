import { FaReact } from "react-icons/fa";

const TableRow = ({
  errorType,
  errorLoc,
  errorDesc,
  status,
  numEvents,
  usersEffected,
}) => {
  return (
    <>
      <tr className="border-b-2 hover:bg-slate-400">
        <td className="flex  items-center p-4">
          <FaReact className="mr-4 text-2xl" />
          <div>
            <div>
              <span>{errorType} :&nbsp;</span>
              <span>{errorDesc}</span>
            </div>
            <div>
              <span>{errorLoc}</span>
            </div>
          </div>
        </td>

        <td className="p-4">
          <div className="w-fit flex p-2 items-center h-5 rounded-md">
            <span>{status}</span>
          </div>
        </td>
        <td className=" p-4">
          <span>{numEvents}</span>
        </td>

        <td className=" p-4">
          <span>{usersEffected}</span>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
