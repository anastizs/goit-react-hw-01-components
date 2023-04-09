import css from "./StatisticList.module.css";
import PropTypes from "prop-types";

export const Statistic = ({ label, percentage }) => {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
};
Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
