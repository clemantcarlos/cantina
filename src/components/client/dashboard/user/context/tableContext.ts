import { createContext, useContext, type Dispatch, type SetStateAction } from "react";
import type { User } from "../types";

interface ITableContext {
  tableData: User[];
  setTableData: Dispatch<SetStateAction<User[]>>;
}
export const TableContext = createContext<ITableContext | undefined>(undefined);

export function useTableContext(){
  const table = useContext(TableContext)

  if(table === undefined) {
    throw new Error('useTableContext must be used within a TableContext');
  }

  return table;
}