import PropTypes from "prop-types";
import { Title } from "./StatisticTitle.styled";

export const StatisticsTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

StatisticsTitle.propTypes = {
  text: PropTypes.string,
};
