import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
	const mathMarksData = [
		{ id: 1, name: "Ayesha Siddiqua", math: 76, physics: 82, chemistry: 79 },
		{ id: 2, name: "Rahim Chowdhury", math: 85, physics: 78, chemistry: 86 },
		{ id: 3, name: "Fatema Khatun", math: 67, physics: 73, chemistry: 72 },
		{ id: 4, name: "Sohel Rana", math: 91, physics: 88, chemistry: 92 },
		{ id: 5, name: "Nusrat Jahan", math: 58, physics: 65, chemistry: 62 },
		{ id: 6, name: "Arif Hasan", math: 72, physics: 77, chemistry: 74 },
		{ id: 7, name: "Tamanna Rahman", math: 88, physics: 93, chemistry: 90 },
		{ id: 8, name: "Anisur Rahman", math: 95, physics: 97, chemistry: 94 },
		{ id: 9, name: "Lamia Sultana", math: 69, physics: 75, chemistry: 70 },
		{ id: 10, name: "Imran Hossain", math: 82, physics: 80, chemistry: 83 },
	];
	return (
		<div>
			<LChart
				width={800}
				height={400}
				data={mathMarksData}
			>
				<XAxis></XAxis>
				<YAxis></YAxis>
				<Line
					dataKey={"math"}
					stroke="red"
				></Line>
				<Line
					dataKey={"physics"}
					stroke="yellow"
				></Line>
				<Line
					dataKey={"chemistry"}
					stroke="green"
				></Line>
			</LChart>
		</div>
	);
};

export default LineChart;
