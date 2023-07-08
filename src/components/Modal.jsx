import { useState } from "react";
import { useData } from "../context/DataContext";

export const Modal = ({setShowModal,resData}) => {
   const {allRes,setAllRes} = useData();
    const [data,setData] = useState(
        {
         rating : "",
        comment : ""
        ,revName : "Vivek"
        ,pp : "https://cdn-icons-png.flaticon.com/128/4140/4140061.png"
    }
    )
console.log(resData)
    const handleClick = (e) => {
        e.preventDefault();
        const sum = resData.ratings.length+1
        console.log(sum)
        const avg =  (data.rating*resData.ratings.length + resData.averageRating)/sum
        console.log(avg)
       const unique = allRes.map((res) => res.id == resData.id ? 
       {...res,ratings:[...res.ratings,data],averageRating : avg} : res);
       console.log(unique);
       setAllRes(unique)
       setShowModal(false);
    }
  
    return(
        <div className="flex justify-center items-center min-h-screen
        bg-gray-400/[.30] fixed top-0 left-0 right-0 z-20">
            <form className="z-30 p-2 bg-gray-700">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/2997/2997911.png" 
                    className="w-12 cursor-pointer" onClick = {() => setShowModal(false)}/>
                    <h3>Add Your Review</h3>
                    <div>
                        <h2>Ratings:</h2>
                        <select name="ratings" id="ratings" onChange={(e) => setData({...data,rating:Number(e.target.value)})}>
                        <option value="Select">Select</option>    
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </select>
                   </div>
                   <div>
                     <h3>Comment:</h3>
                     <input type="text"
                     value={data.comment}
                     onChange={(e) => setData({...data,comment:e.target.value})}/>
                     <button onClick={(e) => handleClick(e)}
                     className="p-3 bg-red-400 mr-2 rounded-md">Submit</button>
                   </div>
                </div>
            </form>
        </div>
    )
}