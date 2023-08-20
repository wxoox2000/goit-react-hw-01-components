import { FriendCard } from "./FriendCard/FriendCard"
import { List } from "./friendlist.styled"


export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(({avatar, name, isOnline, id}) => {
                const data = {avatar, name, isOnline, id};
                return (
                    <FriendCard data={data} />
                )
            })}
        </List>
    )
}