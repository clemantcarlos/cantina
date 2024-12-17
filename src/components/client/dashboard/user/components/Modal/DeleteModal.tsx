
import Modal from "./Modal";
export default function AddModal({
  show,
  hide,
}: {
  show: Boolean;
  hide: () => void;
}) {

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form handler");
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