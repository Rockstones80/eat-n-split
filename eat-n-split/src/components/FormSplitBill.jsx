import Button from "../components/Button"

const FormSplitBill = () => {
  return (
    <form className="grid grid-cols-[1fr_12rem] py-10 px-16">
        <p className="col-span-full text-4xl uppercase font-bold tracking-tighter mb-6">Split bill with X</p>
        <label>💰 Bill value</label>
      <input
        type="text"
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
      />
    
    <label>👫 X's expense</label>
      <input type="text" disabled />

      <p> Who is paying the bill</p>
      <select>
        <option value="user">You</option>
        <option value="friend"> X</option>
      </select>

      <Button> Split bill</Button>
    </form>
  )
}

export default FormSplitBill
