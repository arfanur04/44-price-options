import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
	const [phones, set_phones] = useState([]);

	useEffect(() => {
		// fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		set_phones(data.data);
		// 	})
		// 	.catch((err) => console.error("err", err));

		axios
			.get("https://openapi.programming-hero.com/api/phones?search=iphone")
			.then((data) => {
				const phoneData = data.data.data;
				const phonesWithFakeData = phoneData.map((phone) => {
					const obj = {
						name: phone.phone_name,
						price: parseInt(phone.slug.split("-")[1]),
					};
					return obj;
				});
				console.log(phonesWithFakeData);
				set_phones(phonesWithFakeData);
			});
	}, []);

	return (
		<div>
			<h2 className="text-6xl">Phones: {phones.length}</h2>
			<BarChart
				width={1200}
				height={400}
				data={phones}
			>
				<Bar
					dataKey={"price"}
					fill="#8884d8"
				></Bar>
				<XAxis dataKey={"name"} />
				<YAxis />
				<Tooltip />
			</BarChart>
		</div>
	);
};

export default Phones;
