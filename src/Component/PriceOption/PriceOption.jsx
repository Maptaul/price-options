const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 rounded-lg p-4 text-white py-8 space-y-5 flex flex-col">
      <h1 className="text-center">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h1>
      <h4 className="text-4xl text-center">{name}</h4>
      <div className="flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>
      <div className=" w-full bg-green-500 hover:bg-green-900 rounded-lg p-3 text-center">
        <button>Buy Now</button>
      </div>
    </div>
  );
};

import PropTypes from "prop-types";
import Feature from "../feature/Feature";
PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
