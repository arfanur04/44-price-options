import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
	const { name, price, features } = option;

	return (
		<div className="flex flex-col p-4 text-white bg-blue-500 rounded-md">
			<h2 className="text-center">
				<span className="font-extrabold text-7xl">{price}</span>
				<span className="text-2xl">/mon</span>
			</h2>
			<h4 className="my-8 text-3xl text-center">{name}</h4>
			<div className="flex-grow pl-6">
				{features?.map((feature, idx) => (
					<Feature
						key={idx}
						feature={feature}
					></Feature>
				))}
			</div>
			<button className="w-full py-2 mt-12 font-bold bg-green-600 rounded-lg hover:bg-green-900">
				Buy Now
			</button>
		</div>
	);
};

PriceOption.propTypes = {
	option: PropTypes.object,
};

export default PriceOption;
