import { ArcElement, Chart as ChartJs, Legend, Tooltip } from "chart.js/auto";

import { Line } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

const ActivityGraph = ({}) => {
  return (
    <>
      <div className="flex ">
        <Line
          datasetIdKey="id"
          data={{
            labels: ["", "", "", "Users", "", "", "", "", ""],
            datasets: [
              {
                id: 1,
                label: "Issues",
                data: [0, 60, 75, 32, 55, 22, 12, 90, 64],
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default ActivityGraph;
