
import Modal from "./Modal";

import Save from "@/icons/react/Save";
import useSpinner from "@/client/global/hooks/useSpinner";
import type { User } from "../../types";
import { 
  useEffect, 
  useRef, 
  type RefObject 
} from "react";

export default function AddModal({
  user,
  show,
  hide,
}: {
  user: User | null;
  show: Boolean;
  hide: () => void;
}) {

  const { spinnerActive, spinnerInactive } = useSpinner();

  const nameRef = useRef() as RefObject<HTMLInputElement>;
  const emailRef = useRef() as RefObject<HTMLInputElement>;
  const phoneNumberRef = useRef() as RefObject<HTMLInputElement>;
  const typeCedulaRef = useRef() as RefObject<HTMLSelectElement>;
  const cedulaRef = useRef() as RefObject<HTMLInputElement>;
  const passwordRef = useRef() as RefObject<HTMLInputElement>;
  const confirmPasswordRef = useRef() as RefObject<HTMLInputElement>;
  const addressRef = useRef() as RefObject<HTMLTextAreaElement>;

  useEffect(()=>{
    if(user){
      const {
        name,
        email,
        phoneNumber,
        cedula,
        address
      } = user;

      nameRef.current!.value = name;
      emailRef.current!.value = email;
      phoneNumberRef.current!.value = phoneNumber;
      cedulaRef.current!.value = cedula.slice(1);
      addressRef.current!.value = address;
    }
  }, [])

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const cedula = formData.get("cedula") as string;
    const cedulaType = formData.get("cedulaType") as string;
    const address = formData.get("address") as string;

    if(!name || !email || !phoneNumber || !cedula || !cedulaType || !address){
      return;
    }

    const userData = {
      name,
      email,
      phoneNumber,
      cedula: cedulaType + cedula,
      address
    }

    fetch(`http://localhost:3000/user/${user!.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      }
    )
    .then((res) => res.json())
    .then(() => {
      hide();
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <Modal show={show} hide={hide} title="Add User">
      <form onSubmit={submitHandler} className="p-4 md:p-5">
        <div className="grid gap-4 mb-10 md:mb-4 grid-cols-4 ">
          <div className="col-span-4 md:col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              ref={nameRef}
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
              ref={emailRef}
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
              ref={phoneNumberRef}
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
                ref={typeCedulaRef}
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
                ref={cedulaRef}
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
                ref={passwordRef}
                type="password"
                name="password"
                id="password"
                autoComplete='off'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 disabled:bg-slate-200"
                placeholder="********"
                disabled={true}
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
                ref={confirmPasswordRef}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                autoComplete='off'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 disabled:bg-slate-200"
                placeholder="********"
                disabled={true}
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
            <textarea className="block p-2.5 w-full h-full text-sm 
              text-gray-900 bg-gray-50 rounded-lg 
              border border-gray-300 
              focus:ring-blue-500 focus:border-blue-500"
              ref={addressRef}
              id="address"
              name="address"
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
