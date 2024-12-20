import { useEffect, useState } from "react";
import { getAllUsers, searchUsers } from "../utils";

import type { User } from "../types";

export default function useTable() {
   const [tableData, setTableData] = useState<User[]>([]); 

  const [pagination, setPagination] = useState({
    skip: 0,
    take: 10,
    total:0
  });

  useEffect(() => {
    getAllUsers(setTableData, setPagination);
  }, []);

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;

    if (!search) {
      getAllUsers(setTableData, setPagination);
      return;
    }

    searchUsers(setTableData, search);
  };

 
  return { 
    tableData,
    pagination, 
    setTableData,
    searchHandler,
  };
}