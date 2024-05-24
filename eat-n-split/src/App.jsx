import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendList";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

const App = () => {
  return (
    <div className=" grid grid-cols-custom items-center min-h-[66vh] gap-12">
      <div className="">
        <FriendList />
        <FormAddFriend />
        <Button> Add Friend</Button>
      </div>
      <div className=" mt-[-110px]">

      <FormSplitBill />
      </div>
    </div>
  );
};

export default App;
