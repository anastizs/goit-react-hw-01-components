import PropTypes from "prop-types";
import { TransactionHistoryTitle } from "components/TransactionHistoryTitle/TransactionHistoryTitle";
import { TransactionHistoryItem } from "components/TransactionHistoryItem/TransactionHistoryItem";
import { TableStyled, TableHeadStyled } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
  return (
    <TableStyled>
      <TableHeadStyled>
        <TransactionHistoryTitle />
      </TableHeadStyled>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </TableStyled>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
