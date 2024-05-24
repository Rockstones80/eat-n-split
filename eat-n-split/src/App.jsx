import FormAddFriend from "./components/FormAddFriend"
import FriendList from "./components/FriendList"



const App = () => {
  return (
    <div className=" grid grid-cols-custom items-center min-h-[66vh]">
      <div className="">
      <FriendList />
      <FormAddFriend />
      </div>
    </div>
  )
}

export default App
