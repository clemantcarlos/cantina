import { createContext, useContext } from "react";

export const TableContext = createContext<any>(undefined);

export function useTableContext(){
  const table = useContext(TableContext)

  if(table === undefined) {
    throw new Error('useTableContext must be used within a TableContext');
  }

  return table;
}