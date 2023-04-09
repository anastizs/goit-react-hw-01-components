
import css from "./StatisticTitle.module.css";

export const StatisticTitle = ({ text }) => {
  return <h2 className={css.title}>{text}</h2>;
};
