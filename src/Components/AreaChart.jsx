import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const AreaChartComponent = ({ data }) => {
  return (
    <>
      <div>
        <ResponsiveContainer minWidth={"65vw"} minHeight={300}>
          <AreaChart data={data} margin={{ top: 50 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#1e3a8a"
              fill="#3b82f6"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default AreaChartComponent;
