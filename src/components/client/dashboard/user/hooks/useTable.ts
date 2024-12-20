import { 
  useEffect, 
  useState, 
} from "react";

import useData, { getAllUsers, searchUsers } from "./useData";

export default function useTable() {
  const { data: tableData, setData: setTableData } = useData();

  const [pagination, setPagination] = useState({
    skip: 0,
    take: 10,
    total:0
  });

  useEffect(() => {
    getAllUsers(setTableData, setPagination);
  }, []);

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