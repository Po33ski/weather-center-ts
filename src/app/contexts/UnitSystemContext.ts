import { createContext } from "react";
import { UnitSystemContextType } from "../types/types";
//dodac typy
export const UnitSystemContext = createContext<UnitSystemContextType | null>(
  null
);
