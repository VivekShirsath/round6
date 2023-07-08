import { Buttons } from "../components/Buttons"
import { Body } from "../components/Body"

export const Home = () => {
    return(
       <div className="text-center p-3 text-lg">
           <h2>Food Ordering App:</h2>
           <h4>Select Your Cuisine</h4>
           <Buttons/>
           <Body/>
       </div>
    )
}