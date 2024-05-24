import { initialFriends} from "../utilities/initials"
import  Friend  from "../components/Friend"

const FriendList = () => {
  return (
    <div>
        {initialFriends.map(friend => (
            <Friend
             key={friend.id}
             friend={friend}
              />
        ))}
    </div>
    
  )
}

export default FriendList
