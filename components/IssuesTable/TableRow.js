import { FaReact } from "react-icons/fa";

const TableRow = ({}) => {
  return (
    <>
      <tr className="border-b-1">
        <td className="flex  items-center p-4">
          <FaReact className="mr-4 text-2xl " />
          <div>
            <div>
              <span>TypeError :&nbsp;</span>
              Cannot read properties of undefined (reading length)
            </div>
            <div>at eval (webpack-internal:///./pages/index.tsx:37:7)</div>
          </div>
        </td>

        <td className=" p-4">
          <div className="w-fit flex p-2 items-center h-5 rounded-md">
            <span>Error</span>
          </div>
        </td>
        <td className=" p-4">
          <span>105</span>
        </td>

        <td className=" p-4">
          <span>105</span>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
