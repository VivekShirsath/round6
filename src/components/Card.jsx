import { NavLink } from "react-router-dom"

export const Card = ({restaurant}) => {
    return(
        <div className="flex flex-col gap-4 mt-3">
            { <h3>Dishes By{restaurant.name}</h3>}
           <div className="flex gap-4 flex-wrap align-middle justify-between">
           {  restaurant.menu?.map(({name,imgSrc,price}) => {
               return(
                <NavLink to = {"/restaurantdetails/"+ restaurant.id} key={name}>
               <div key={name} className="flex flex-col w-72 items-center shadow-md rounded-md ">
                    <img src={imgSrc} className="w-56 h-36 rounded-md"/>
                    <h3>{name}</h3>
                    <h3>{price} for Two</h3>
                    <h3>{restaurant.name}</h3>
                </div>
                </NavLink> 
               )
            })
        }
        </div>
        </div>
    )
}