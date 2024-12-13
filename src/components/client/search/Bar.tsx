// ICONS
import Lens from "@/icons/react/Lens"

export default function Bar() {

  const submitHandler = (e:any) => {
    e.preventDefault()
    const name:string | null = e.target.name.value
    window.location.href = `/search/${name}`
  }
  return (
    <form onSubmit={submitHandler}
    className="w-full border border-secondary text-secondary rounded-md flex p-2">
      <input type="text" name="name" className="flex-1 outline-none px-4 text-tertiary" />
      <button type="submit">
        <Lens className="size-8"/>
      </button>
    </form>
  )
}