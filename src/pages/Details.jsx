
import { useParams } from "react-router-dom"
import { useData } from "../context/DataContext";
import {useState} from 'react';
import { Modal } from "../components/Modal";
import { NavLink } from "react-router-dom";

export const Details = () => {
    const {id} = useParams();
    const {allRes} = useData();
    const [showModal,setShowModal] = useState(false);

    const resData = allRes?.find?.((data) => data.id == id);
    
    return(
        <>
        <NavLink to="/"> <img  src="https://cdn-icons-png.flaticon.com/128/507/507257.png" className="w-12"
            /></NavLink>
        <div className=" flex justify-center items-center gap-4">
            <div className="flex justify-center items-center p-2 ">
            <div className="flex items-center flex-col  justify-center">
              <h3 className="text-xl font-extrabold">{resData?.name}</h3>
              <h3 className="flex  items-center text-center">{resData?.menu.map(({name}) => <p>{name}</p>)}</h3>
              <h3>{resData?.address}</h3>
              <h3>{resData?.averageRating}</h3>
            </div>
            </div>
            <div>
                <button onClick = {() => setShowModal(true)}
                className="p-3 bg-red-400 mr-2 rounded-md">Add Review</button>
            </div>
            <hr>
            </hr>
            </div>
            <div>
                <h2 className="text-center text-2xl">Reviews</h2>
                <div className="flex flex-col gap-2 p-2">
                {
                    resData?.ratings.map(({rating,comment,revName,pp}) => {
                        return(
                            <div key={pp} className="flex justify-around items-center">
                                 <div className="w-[200px] self-start">
                                  <div>
                                    <img src={pp} className="w-12"/>
                                    <p>{revName}</p>
                                    </div>
                                    <div>
                                        {comment}
                                    </div>
                                </div>
                                <div className="flex gap-1 items-center bg-green-500 w-fit">
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828970.png" className="w-8"/>
                                <p>{rating}</p>
                                </div>
                
                            </div>
                        )
                    })
                }
                </div>
            </div>
            {
                showModal && <Modal setShowModal={setShowModal} resData={resData}/>
            }
            </>
    )
}