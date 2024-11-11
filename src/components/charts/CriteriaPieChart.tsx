import type { FC } from "react";

import { PieChart } from "@mui/x-charts";

interface CriteriaPieChartProps {
  data: { id: number; label: string; value: number }[];
}

const CriteriaPieChart: FC<CriteriaPieChartProps> = ({ data }) => {
  return (
    <PieChart
      width={400}
      height={300}
      margin={{ bottom: 80, right: 0 }}
      series={[
        {
          data,
          innerRadius: 30,
          paddingAngle: 1,
          cornerRadius: 2,
        },
      ]}
      slotProps={{
        legend: {
          direction: "row",
          position: { vertical: "bottom", horizontal: "left" },
        },
      }}
    />
  );
};

export default CriteriaPieChart;
