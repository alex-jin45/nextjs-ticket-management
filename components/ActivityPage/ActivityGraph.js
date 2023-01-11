import { ArcElement, Chart as ChartJs, Legend, Tooltip } from "chart.js/auto";

import { Line } from "react-chartjs-2";

const ActivityGraph = ({}) => {
  return (
    <>
      <div className="flex">
        <Line
          datasetIdKey="id"
          data={{
            labels: ["", "", "", "", "", "Users", "", "", "", "", ""],
            datasets: [
              {
                id: 1,
                label: "Issues",
                data: [0, 60, 75, 32, 55, 22, 12, 90, 64, 77, 10],
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default ActivityGraph;
