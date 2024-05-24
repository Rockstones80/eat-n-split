import { initialFriends} from "../utilities/initials"
import  Friend  from "../components/Friend"

const FriendList = () => {
  return (
    <div className="list-none flex flex-col gap-1 text-xl mb-8">
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
