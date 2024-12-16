
export default function AddModal({show, hide}: {show: Boolean, hide: () => void}) {
  return (
    <div
      id="add_user_modal"
      className={show ? `overflow-y-auto overflow-x-hidden
      fixed top-0 right-0 left-0 z-50 
      md:inset-0 h-screen max-h-full 
      bg-slate-500/30 flex justify-center items-center w-full` : 'hidden'}
    >
      <div className="p-4 w-full max-w-md md:max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <header className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Create New User
            </h3>
            <button 
              onClick={hide}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </header>
          <form className="p-4 md:p-5">
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
                  name="phonNumber"
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
                    text-gray-900 text-sm rounded-s-lg focus:ring-primary-500 focus:border-primary-500 block w-fit p-2.5">
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="********"
                    required
                  />
                </div>
              </div>
              <div className="col-span-4 md:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Address
                </label>
                <textarea
                  id="description"
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
        </div>
      </div>
    </div>
  );
}
