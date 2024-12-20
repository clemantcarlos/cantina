import { useModalContext } from "../../context/modalContext";
import { useTableContext } from "../../context/tableContext";
import Modal from "./Modal";
export default function AddModal() {
  const { show, hide } = useModalContext();
  const { tableData, setTableData } = useTableContext();

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const cedula = formData.get("cedula") as string;
    const cedulaType = formData.get("cedulaType") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const address = formData.get("address") as string;

    const body = {
      name,
      email,
      phoneNumber,
      cedula: cedulaType + cedula,
      password,
      address,
    };

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch(`http://localhost:3000/auth/local/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    .then( res => res.json())
    .then((user) => {
      setTableData([
        ...tableData,
        user
      ])
      
      hide();
    })
    .catch((err) => {
      console.log(err);
    });
  };
  
  return (
    <Modal show={show} hide={hide} title="Add User">
      <form onSubmit={formHandler} className="p-4 md:p-5">
        <div className="grid gap-4 mb-10 md:mb-4 grid-cols-4 ">
          <div className="col-span-4 md:col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Type user name"
              required
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Type user email"
              required
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            <label
              htmlFor="phonNumber"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone number
            </label>
            <input
              type="text"
              inputMode="numeric"
              name="phoneNumber"
              id="phoneNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Type user phone number"
              required
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            <label
              htmlFor="cedula"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Cedula
            </label>
            <div className="flex">
              <select
                name="cedulaType"
                id="cedulaType"
                className="bg-gray-50 border border-gray-300 
                    text-gray-900 text-sm rounded-s-lg focus:ring-primary-500 focus:border-primary-500 block w-fit p-2.5"
              >
                <option defaultValue="V">V</option>
                <option value="J">J</option>
                <option value="E">E</option>
              </select>
              <input
                type="text"
                name="cedula"
                id="cedula"
                className="bg-gray-50 border border-gray-300 
                    text-gray-900 text-sm rounded-e-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type user cedula"
                required
              />
            </div>
          </div>
          <div className="flex flex-col col-span-4 md:col-span-2">
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="********"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="********"
                required
              />
            </div>
          </div>
          <div className="col-span-4 md:col-span-2">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="block p-2.5 w-full h-full text-sm 
                  text-gray-900 bg-gray-50 rounded-lg 
                  border border-gray-300 
                  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your address here"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          <svg
            className="me-1 -ms-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          Add new product
        </button>
      </form>
    </Modal>
  );
}
