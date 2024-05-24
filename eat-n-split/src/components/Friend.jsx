import Button from "../components/Button"

const Friend = ({ friend }) => {
  return (
    <div className=" grid grid-cols-[4.8rem_1fr_auto] items-center gap-x-6 p-5 rounded-lg transition duration-500">
        <img src={friend.image} alt={friend.name}  className="rounded-full w-full row-span-2"/>
        <p className="row-start-1 col-start-2">{friend.name}</p>
         
        {friend.balance < 0 && <p className=" text-red-500 row-start-2 col-start-2">
            You owe {friend.name} €{Math.abs(friend.balance)}</p>}
      
        {friend.balance > 0 && <p className="green row-start-2 col-start-2">
            {friend.name} owes you €{Math.abs(friend.balance)}</p>}
      
        {friend.balance === 0 && <p className="row-start-2 col-start-2">
            You and {friend.name} are even </p>}
        <Button> Select</Button>
    </div>
  )
}

export default Friend
