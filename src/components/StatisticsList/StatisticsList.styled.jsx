import styled from "@emotion/styled";

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 86px;
  color: azure;
  margin: 0;
  padding: 16px;
  padding: 8px;
  justify-content: space-between;

  &:not(:last-child) {
    border-right: 0.5px solid azure;
`;

export const StatLabel = styled.span`
  font-family: "Oxygen";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.6;
`;
export const StatPercentage = styled.span`
  font-family: "Oxygen";
  font-weight: 700;
  font-size: 24px;
  line-height: 1.6;
`;
