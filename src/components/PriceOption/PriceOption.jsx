import PropTypes from "prop-types";
import Features from "../Features/Features";

const PriceOption = ({ option }) => {
    const { price, membershipType, features } = option
    return (
        <div className="bg-blue-500 text-center p-4 rounded-xl flex flex-col">
            <h2>
                <span className="text-7xl font-bold">{price}</span>
                <span className="text-2xl font-semibold">/mon</span>
            </h2>
            <h2 className="my-6 text-7xl">{membershipType}</h2>
            <div className="flex-grow my-4">
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
            </div>
            <button className="btn btn-primary">Add More</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;