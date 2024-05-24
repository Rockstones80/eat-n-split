

const Friend = ({ friend }) => {
  return (
    <div className=" grid grid-cols-[4.8rem_1fr_auto] items-center gap-x-6 p-2 rounded-md ">
        <img src={friend.image} alt={friend.name} />
        <p>{friend.name}</p>
        {

        }
      
    </div>
  )
}

export default Friend
