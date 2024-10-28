import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <div className="">
      <li className="mr-5 hover:bg-yellow-400 rounded-lg ">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
