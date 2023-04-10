import PropTypes from "prop-types";
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

FriendList.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
