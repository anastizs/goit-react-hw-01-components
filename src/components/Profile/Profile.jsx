import PropTypes from "prop-types";
import {
  Container,
  Card,
  Avatar,
  UserName,
  UserTag,
  Location,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from "./Profile.styled";

export const Profile = (props) => {
  return (
    <Container>
      <Card>
        <Avatar src={props.avatar} alt={props.username} />
        <UserName>{props.username}</UserName>
        <UserTag>@{props.tag}</UserTag>
        <Location>{props.location}</Location>
      </Card>

      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{props.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{props.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{props.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
