import PropTypes from "prop-types";
import css from "./StatisticsTitle.module.css";

export const StatisticsTitle = ({text}) => {
  return <h2 className={css.text}>{text}</h2>;
};

StatisticsTitle.propTypes = {
  text: PropTypes.string
};