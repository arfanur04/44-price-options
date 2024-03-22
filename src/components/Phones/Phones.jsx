import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { Audio, Grid } from "react-loader-spinner";

const Phones = () => {
	const [phones, set_phones] = useState([]);
	const [loading, set_loading] = useState(true);

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
				set_phones(phonesWithFakeData);
				set_loading(false);
			});
	}, []);

	return (
		<div>
			{loading && (
				<div className="flex justify-center gap-6">
					<Audio
						height="80"
						width="80"
						radius="9"
						color="green"
						ariaLabel="three-dots-loading"
						wrapperStyle
						wrapperClass
					/>
					<Grid
						visible={true}
						height="80"
						width="80"
						color="#4fa94d"
						ariaLabel="grid-loading"
						radius="12.5"
						wrapperStyle={{}}
						wrapperClass="grid-wrapper"
					/>
				</div>
			)}
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
