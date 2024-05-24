import Button from "../components/Button"

const FormAddFriend = () => {
  return (
  
        <form className="grid grid-cols-[1fr_1.5fr] mb-6 p-5">
        <p className=" font-medium">Friend name</p>
        <input type="text" />

        <p className=" font-medium">Friend name</p>
        <input type="text" />
        <div className="mt-2 col-start-2">

        <Button> Add</Button>
        </div>
        </form>

      
    
  )
}

export default FormAddFriend
