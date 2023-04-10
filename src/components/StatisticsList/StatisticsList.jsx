import PropTypes from "prop-types";
import { StatItem, StatLabel, StatPercentage } from "./StatisticsList.styled";

export const StatisticList = ({ name, value }) => {
  return (
    <StatItem>
      <StatLabel>{name}</StatLabel>
      <StatPercentage>{value}%</StatPercentage>
    </StatItem>
  );
};

StatisticList.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

