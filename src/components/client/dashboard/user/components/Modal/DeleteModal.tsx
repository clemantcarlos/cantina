
import Modal from "./Modal";
import type { User } from '../../types/index';
import useTable from "../../hooks/useTable";
export default function AddModal({
  show,
  user,
  hide,
}: {
  show: Boolean;
  user: User | null
  hide: () => void;
}) {

  const { data, setData } = useTable();

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if(!user) return 
    
    const { id, email } = user

    const formData = new FormData(e.currentTarget);
    const emailInput = formData.get('email') as string;

    if (emailInput !== email) {
      alert('Email is not match')
      return
    }

        fetch(`http://localhost:3000/user/${id}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyYjFlMDljNC05NGY0LTRlNjMtODVkMi0xNzFhM2U4NmUzZDUiLCJlbWFpbCI6ImNsZW1hbnRjYXJsb3MxMUBnbWFpbC5jb20iLCJpYXQiOjE3MzQ2MTMzMTIsImV4cCI6MTczNDYxNDIxMn0.6hF5tiMvE5FeFXtc8woc_z3MPH0RlcqDShHamJ_ouoI`
            }
          }
        )
        .then(res => res.json())
        .then(userData => {
          const { id } = userData;
          const filteredData = data.filter((user: User)=> user.id !== id)
          setData(filteredData);
          
          hide();
        })
        .catch(err => {
          console.log(err)
        })
  };

  return (
    <Modal show={show} hide={hide} title="Add User">
       <form onSubmit={formHandler} className="p-4 md:p-5 ">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Are you sure you want to delete this user?
        </h3>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 my-2"
          placeholder="Type user email"
          required
        />
        <div className="flex justify-end gap-x-2">
          <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
            type="submit" >
            Yes. I'm sure
          </button>
          <button className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded" 
            onClick={hide} 
            type="button">
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}