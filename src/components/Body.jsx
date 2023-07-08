import { useData } from "../context/DataContext"
import { restaurantsData } from "../data";
import { NavLink } from "react-router-dom";
import { Card } from "./Card";

export const Body = () => {
    const {category,res} = useData();

    return(
        <div>
          {!category && <></> }
          {
           category && res?.map((restaurant) => <Card restaurant={restaurant}/>)
          }
        </div>
    )
}