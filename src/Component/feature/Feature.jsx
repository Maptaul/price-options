import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({ feature }) => {
  return (
    <div className="">
      <h1 className=" flex gap-5 space-y-3">
        <FaCheckCircle className="text-green-500" />
        {feature}
      </h1>
      
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
