import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentMarksData = [
    { id: 1, name: "Aarav", math: 78, physics: 82, chemistry: 74 },
    { id: 2, name: "Zara", math: 85, physics: 79, chemistry: 88 },
    { id: 3, name: "Liam", math: 92, physics: 91, chemistry: 85 },
    { id: 4, name: "Maya", math: 67, physics: 74, chemistry: 72 },
    { id: 5, name: "Noah", math: 74, physics: 76, chemistry: 79 },
    { id: 6, name: "Olivia", math: 88, physics: 83, chemistry: 91 },
    { id: 7, name: "Elijah", math: 95, physics: 89, chemistry: 87 },
    { id: 8, name: "Sophia", math: 81, physics: 77, chemistry: 84 },
    { id: 9, name: "James", math: 73, physics: 68, chemistry: 70 },
    { id: 10, name: "Emma", math: 89, physics: 85, chemistry: 90 },
  ];

  return (
    <div>
      <LChart width={600} height={300} data={studentMarksData}>
        <XAxis dataKey="" /> <YAxis dataKey="" />
        <Line type="monotone" dataKey="math" stroke="#8884d8" />
        <Line type="monotone" dataKey="physics" stroke="#82ca9d" />
        <Line type="monotone" dataKey="chemistry" stroke="#ff7f0e" />
      </LChart>
    </div>
  );
};

export default LineChart;
