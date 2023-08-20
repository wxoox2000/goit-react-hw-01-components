import { ListItem, Status, Avatar } from "./FriendCard.styled";

export const FriendCard = ({data}) => {
  return (
    <ListItem key={data.id}>
      <Status $status={data.isOnline.toString()}></Status>
      <Avatar src={data.avatar} alt={data.name} width="48" />
      <p>{data.name}</p>
    </ListItem>
  );
};
