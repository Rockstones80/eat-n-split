

const button = ({children}) => {
  return (
    <div>
       <button className="bg-[var(--color-medium)] text-[#343a40] py-3 px-5 border-none rounded-lg font-bold cursor-pointer transition duration-300">{children}</button>
    </div>
  )
}

export default button
