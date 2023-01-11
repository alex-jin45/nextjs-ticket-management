const ActivityUsers = ({}) => {
  return (
    <>
      <div className="mt-5">
        <table className="w-3/5">
          <thead>
            <tr className="border-b-2">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left"># of Issue Reported</th>
            </tr>
            <tbody className="">
              <tr className="">
                <td className=" p-4">
                  <span>John Smith</span>
                </td>

                <td className="flex p-4">
                  <span>55</span>
                </td>
              </tr>
            </tbody>
          </thead>
        </table>
      </div>
    </>
  );
};

export default ActivityUsers;
