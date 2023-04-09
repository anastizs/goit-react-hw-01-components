import PropTypes from "prop-types";
import { StatisticsTitle } from "components/StatisticsTitle/StatisticsTitle";
import { StatisticList } from "components/StatisticsList/StatisticsList";
import { сheckData } from "../../utils/сheckData";
import { Card, StatList } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
  const newData = сheckData(stats);
  console.log(newData);
  return (
    <Card>
      {title && <StatisticsTitle text={title} />}
      <StatList>
        {Object.keys(newData).map((key) => (
          <StatisticList key={key} name={key} value={newData[key]} />
        ))}
      </StatList>
    </Card>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
};
