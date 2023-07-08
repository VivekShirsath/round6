
import { createContext,useContext,useState,useEffect } from "react";
import { restaurantsData } from "../data";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {

    const [category , setCategory] = useState(null);
    const [res , setRes] = useState({});
    const [allRes,setAllRes] = useState(restaurantsData)


    return(
        <DataContext.Provider value={{category,setCategory,res,setRes,allRes,setAllRes}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)