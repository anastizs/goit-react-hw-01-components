import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { FriendItems } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <FriendItems>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </FriendItems>
  );
};
