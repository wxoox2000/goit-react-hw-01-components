import { List, ListItem, Status, Avatar } from "./friendlist.styled"


export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(({avatar, name, isOnline, id}) => {
                return (
                    <ListItem key={id}>
                        <Status $status={isOnline.toString()}></Status>
                        <Avatar src={avatar} alt={name} width="48"/>
                        <p>{name}</p>
                    </ListItem>
                )
            })}
        </List>
    )
}