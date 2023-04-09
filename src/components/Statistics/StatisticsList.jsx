import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const StatisticList = ({ name, value }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{name}</span>
      <span className={css.percentage}>{value}%</span>
    </li>
  );
};

StatisticList.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
