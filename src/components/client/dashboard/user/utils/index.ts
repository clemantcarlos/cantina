import type { 
  Dispatch,
  SetStateAction, 
} from "react";

import type { Pagination, User } from "../types";

export const getAllUsers = (
  setData: Dispatch<SetStateAction<User[]>>,
  setPagination: Dispatch<SetStateAction<Pagination>>,
  skip:number = 0,
  take:number = 10
) => {
  fetch(`http://localhost:3000/user?skip=${skip}&take=${take}`)
  .then((res) => res.json())
  .then((data) => {
    setData(data.users);
    setPagination({
      skip,
      take,
      total: data.count
    });
  });
};

export const searchUsers = (
  setData: Dispatch<SetStateAction<User[]>>, 
  search: string
) => {
  fetch(`http://localhost:3000/user/search/${search}`)
  .then((res) => res.json())
  .then((data) => setData(data.users));
};
