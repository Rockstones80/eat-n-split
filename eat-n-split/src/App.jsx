import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendList";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((s) => !s);
    console.log(setIsOpen);
  };

  return (
    <div className=" grid grid-cols-custom items-center min-h-[66vh] gap-12">
      <div className="">
        <FriendList />
        {isOpen && <FormAddFriend />}
        <div onClick={handleClick}>
          <Button> Add Friend</Button>
        </div>
      </div>
      <div className=" mt-[-110px]">
        <FormSplitBill />
      </div>
    </div>
  );
};

export default App;
