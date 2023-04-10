import PropTypes from "prop-types";
import { TableItemStyled } from "./TransactionHistoryItem.styled";

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TableItemStyled>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableItemStyled>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
