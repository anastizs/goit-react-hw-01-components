import PropTypes from "prop-types";
import { Statistic } from "./Statistic";
// import { сheckData } from "./сheckData";
// import css from "./StatisticList.module.css";


export const StatisticList = ({ items }) => {
  // const newData = сheckData(items);
  
  // const keys = Object.keys(newData);
  // // console.log(keys);
  // for (const key of keys) {
  //   // // Ключ
  //   // console.log(key);
  //   // // Значення властивості
  //   // console.log(newData[key]);
  // }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Statistic label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
};



StatisticList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
