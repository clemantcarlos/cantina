import Save from "@/components/icons/react/Save";
import Modal from "./Modal";
export default function AddModal({
  show,
  hide,
}: {
  show: Boolean;
  hide: () => void;
}) {
  return (
    <Modal show={show} hide={hide} title="Add User">
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
          className="text-white flex items-center gap-x-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-0"
        >
          <Save className="size-5" />
          <span className="mt-1">Save changes</span>
        </button>
      </form>
    </Modal>
  );
}
