const ActivityUsers = ({}) => {
  return (
    <>
      <div className="">
        <div className="mt-8 flex w-3/5 ">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 ">
                <th className="p-3 text-center">Name</th>
                <th className="p-3 text-center"># of Issue Resolved</th>
              </tr>
              {/* create own component - userRow or something like that */}
              <tr className="">
                <td className="text-center">John Smith</td>
                <td className="text-center">44</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
};

export default ActivityUsers;
