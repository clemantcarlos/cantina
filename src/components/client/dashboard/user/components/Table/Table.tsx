import Pagination from "./Pagination";
import Spinner from "@/client/global/components/Spinner";

import AddModal from "../Modal/AddModal";
import EditModal from "../Modal/EditModal";
import DeleteModal from "../Modal/DeleteModal";

import Plus from "@/icons/react/Plus";
import Edit from "@/icons/react/Edit";
import Delete from "@/icons/react/Delete";

import useTable from "../../hooks/useTable";
import useSpinner from "@/client/global/hooks/useSpinner";

export default function Table() {
  const {
    data,
    pagination,
    showModal,
    modalName,
    user,
    searchHandler,
    openModal,
    closeModal
  } = useTable();

  const { show: showSpinner } = useSpinner();

  const modalList:{[key:string]:JSX.Element | string} = {
    'default': '',
    'add': <AddModal show={showModal} hide={closeModal}/>,
    'edit': <EditModal show={showModal} hide={closeModal} user = {user}/>,
    'delete': <DeleteModal show={showModal} hide={closeModal}/>
  }

  return (
    <>
      <header className="w-full flex justify-between items-center">
        <form
          className="flex-1 max-w-md shadow-md rounded-lg"
          onSubmit={searchHandler}
        >
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              name="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              placeholder="ej. juan perez, juan@gmail.com, 0412555555"
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 hover:scale-95 transition-all"
            >
              Search
            </button>
          </div>
        </form>
        <button
          onClick={() => openModal({modalName:'add'})}
          type="button"
          className="size-9 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center inline-flex items-center"
        >
          <Plus className="size-full" />
          <span className="sr-only">Icon description</span>
        </button>
      </header>
      <div className="overflow-x-auto shadow-md sm:rounded-lg my-4">
        <table className="w-full text-sm font-text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Correo electrónico
              </th>
              <th scope="col" className="px-6 py-3">
                Teléfono
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user) => (
                <tr
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  key={user.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.name.toUpperCase()}
                  </th>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phoneNumber}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600  
                      hover:cursor-pointer hover:text-blue-800"
                      onClick={() => openModal({modalName:'edit', user})}>
                      <Edit />
                    </button>
                    <button className="text-rose-600
                      hover:cursor-pointer hover:text-rose-800"
                      onClick={() => openModal({modalName:'delete', user})}>
                      <Delete />
                    </button>
                  </td>
                </tr>
              ))}
            {!data ||
              (data.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center">
                    Usuarios no encontrados
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination skip={pagination.take} total={pagination.total} />
      <Spinner show={showSpinner}/>
      {modalList[modalName]}
    </>
  );
}
