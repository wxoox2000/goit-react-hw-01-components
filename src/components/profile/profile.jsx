import { ProfileWrap, Text, Avatar, InfoWrap, StatsList, ListItem, Stats } from "./profile.styled";

export const Profile = ({userData: { username, tag, location, avatar, stats: {followers, views, likes} }}) => {
  return (
    <ProfileWrap>
      <InfoWrap>
        <Avatar
          src= {avatar}
          alt= {username}/>
        <Text $fs="24px">{username}</Text>
        <Text color="#616060" $fs="20px">@{tag}</Text>
        <Text>{location}</Text>
      </InfoWrap>

      <StatsList>
        <ListItem>
          <Stats $fs="12px">Followers</Stats>
          <Stats $fs="14px">{followers}</Stats>
        </ListItem>
        <ListItem>
          <Stats $fs="12px">Views</Stats>
          <Stats $fs="14px">{views}</Stats>
        </ListItem>
        <ListItem>
          <Stats $fs="12px">Likes</Stats>
          <Stats $fs="14px">{likes}</Stats>
        </ListItem>
      </StatsList>
    </ProfileWrap>
  );
};
