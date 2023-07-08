
import { cuisineData,restaurantsData } from "../data"
import { useData } from "../context/DataContext";

export const Buttons = () => {
    const {category,setCategory,setRes,allRes} = useData();
   
    const handleClick = (id) => {
      setCategory(id);
      const unique = allRes.filter(({cuisine_id}) => cuisine_id === id);
      console.log(unique)
      setRes(unique);
    }
    return(
        <div>
            {
                cuisineData?.map(({name,id}) => 
                <button key={id} className="p-3 bg-red-400 mr-2 rounded-md" onClick={() => handleClick(id)}>
                    {name}</button>)
            }
        </div>
    )
}