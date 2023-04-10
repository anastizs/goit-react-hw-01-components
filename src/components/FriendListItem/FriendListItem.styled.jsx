import styled from "@emotion/styled";

export const FriendItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 348px;
  height: 48px;
  background-color: azure;
  color: #000;
  padding: 6px;
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 6px 6px 6px -2px rgba(0, 0, 0, 0.18);
  border-radius: 4px;
`;

export const Status = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: auto;
  margin-bottom: auto;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: red;

  background-color: ${props => {
  switch (props.statusType) {
      case true:
        return "green"
      default:
      return "red";
    }
    }
  }};
  outline: 1px solid red;
`;

export const Avatar = styled.img`
  display: block;
`;

export const Name = styled.span`
  font-family: "Oxygen";
  font-weight: 700;
  font-size: 24px;
  line-height: 1.6;
  color: #10020f;
  margin: 0 0 0 16px;
`;
