import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Completed", value: 12 },
  { name: "Pending", value: 8 },
  { name: "Overdue", value: 4 },
];

const COLORS = ["#22c55e", "#eab308", "#ef4444"];

function TaskChart() {

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm h-[350px]">

      <h2 className="text-xl font-bold mb-5">
        Task Analytics
      </h2>

      <ResponsiveContainer width="100%" height="100%">

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >

            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default TaskChart;