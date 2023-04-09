import styled from "@emotion/styled";

export const Container = styled.div`
flex-direction: column;
display: flex;
width: 360px;
box-shadow: 12px 12px 12px: 4px rgba(0, 0, 0, 0.18);
border-radius: 4px;
margin-top: 64px;
margin-left: auto;
margin-right: auto;
`;

export const Card = styled.div`
  background-color: #f3f3f3;
  padding: 32px;
  text-align: center;
  border-radius: 4px 4px 0px 0px;
`;

export const Avatar = styled.img`
  display: block;
  max-width: 100 %;
  height: auto;
  margin-top: 0;
  margin-bottom: 0;
  width: 120px;
  border-radius: 50 %;
  margin-left: auto;
  margin-right: auto;
`;
export const UserName = styled.p`
  font-family: "Oxygen";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.6;
  margin-top: 32px;
  margin-bottom: 16px;
  color: #10020f;
`;
export const UserTag = styled.p`
  font-family: "Oxygen";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 16px;
  color: #362736;
`;

export const Location = styled.p`
  font-family: "Oxygen";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0;
  color: #362736;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  background-color: #908c9a;
  margin: 0;
  padding: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space: between;
  border-radius: 0px 0px 4px 4px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 118px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-top: 0;
  margin-bottom: 0;

  &:not(:last-child) {
    border-right: 0.5px solid #3a393f;
`;

export const StatsLabel = styled.span`
    font-family: "Oxygen";
    font-weight: 600;
    font-size: 16px;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0;
    color-#362736;
`;

export const StatsQuantity = styled.span`
  font-family: "Oxygen";
  font-weight: 900;
  font-size: 24px;
  line-height: 1.4;
  color: #10020f;
`;
