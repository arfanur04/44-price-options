import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
	const priceOptions = [
		{
			id: 1,
			name: "Basic Membership",
			price: "20.00",
			currency: "USD",
			features: [
				"Access to gym equipment",
				"One group class per week",
				"Locker room access",
				"Free gym T-shirt on signup",
				"Monthly fitness assessment",
			],
		},
		{
			id: 2,
			name: "Premium Membership",
			price: "35.00",
			currency: "USD",
			features: [
				"All Basic Membership features",
				"Unlimited group classes",
				"Sauna access",
				"10% discount on personal training sessions",
				"Access to VIP lounge",
				"Complimentary towel service",
			],
		},
		{
			id: 3,
			name: "Elite Membership",
			price: "50.00",
			currency: "USD",
			features: [
				"All Premium Membership features",
				"Private training sessions (2 per month)",
				"Nutrition consultation",
				"Massage therapy discount",
				"Priority booking for classes",
				"Guest passes for friends and family",
			],
		},
		{
			id: 4,
			name: "Ultimate Membership",
			price: "70.00",
			currency: "USD",
			features: [
				"All Elite Membership features",
				"Unlimited private training",
				"Advanced body composition analysis",
				"Dietary planning",
				"24/7 gym access",
			],
		},
		{
			id: 5,
			name: "Youth Membership",
			price: "15.00",
			currency: "USD",
			features: [
				"Access to gym equipment during off-peak hours",
				"Two group classes per week",
				"Locker room access",
				"Youth fitness programs",
				"Parental control on workout intensity",
			],
		},
	];

	return (
		<div>
			<h2 className="text-5xl">Best Prices in the town</h2>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{priceOptions?.map((option) => (
					<PriceOption
						key={option.id}
						option={option}
					></PriceOption>
				))}
			</div>
		</div>
	);
};

export default PriceOptions;
