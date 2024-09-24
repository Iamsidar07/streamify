import { BAR_DATA, LINE_DATA, PIE_DATA } from "@/data";
import Bar from "./Bar";
import Line from "./Line";
import Pie from "./Pie";

const DataVisualization = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
      <div className="lg:col-span-2">
        <Line data={LINE_DATA} />
      </div>
      <Bar data={BAR_DATA} />
      <Pie data={PIE_DATA} />
    </div>
  );
};

export default DataVisualization;
