import { 
  useEffect, 
  useState, 
  type Dispatch, 
  type SetStateAction 
} from "react";
import type { Pagination, User } from "../types/userType";

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
export const searchUsers = (setData: Dispatch<SetStateAction<User[]>>, search: string) => {
  fetch(`http://localhost:3000/user/search/${search}`)
  .then((res) => res.json())
  .then((data) => setData(data.users));
};

export default function useTable() {
  const [data, setData] = useState<User[]>([]);
  const [showAddUser, setShowAddUser] = useState<Boolean>(false);
  const [pagination, setPagination] = useState({
    skip: 0,
    take: 10,
    total:0
  });

  useEffect(() => {
    getAllUsers(setData, setPagination);
  }, []);

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;

    if (!search) {
      getAllUsers(setData, setPagination);
      return;
    }

    searchUsers(setData, search);
  };

  const openAddUserModal = () => setShowAddUser(true);

  const closeAddUserModal = () => setShowAddUser(false);

  return { 
    data, 
    pagination, 
    showAddUser, 
    searchHandler,
    openAddUserModal,
    closeAddUserModal
  };
}