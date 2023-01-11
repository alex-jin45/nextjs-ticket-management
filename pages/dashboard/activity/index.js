import ActivityGraph from "../../../components/ActivityPage/ActivityGraph";
import ActivityUsers from "../../../components/ActivityPage/AcitivityUsers";

const ActivityPage = ({}) => {
  return (
    <>
      <div>
        <h1>Activity Page (faux graphs go here)</h1>
        <ActivityGraph />
        <ActivityUsers />
      </div>
    </>
  );
};

export default ActivityPage;
