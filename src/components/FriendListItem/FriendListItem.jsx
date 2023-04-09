import { FriendItem, Status, Avatar, Name } from "./FriendListItem.styled";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status statusType={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};
