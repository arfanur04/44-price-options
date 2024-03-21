import PropTypes from "prop-types";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Feature = ({ feature }) => {
	return (
		<div>
			<p className="flex items-center ">
				<IoIosCheckmarkCircle className="mr-2 text-green-500" /> {feature}
			</p>
		</div>
	);
};

Feature.propTypes = {
	feature: PropTypes.string,
};

export default Feature;
