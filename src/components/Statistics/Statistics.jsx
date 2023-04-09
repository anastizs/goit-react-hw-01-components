import PropTypes from "prop-types";
import { StatisticsTitle } from "components/StatisticsTitle/StatisticsTitle";
import { StatisticList } from "components/StatisticsList/StatisticsList";
import { сheckData } from "../../utils/сheckData";
import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
  const newData = сheckData(stats);
  console.log(newData);
  return (
    <div className={css.card}>
      {title && <StatisticsTitle text={title} />}
      <ul className={css.stat_list}>
        {Object.keys(newData).map((key) => (
          <StatisticList key={key} name={key} value={newData[key]} />
        ))}
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  title: PropTypes.string
};