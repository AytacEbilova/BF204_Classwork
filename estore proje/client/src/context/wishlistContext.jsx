import { createContext, useState } from "react";



export const FavouriteContext=createContext(null);

const FavoriteProvider=({children})=>{
    let favLocal=JSON.parse(localStorage.getItem("fav"));
    if(!favLocal){
        localStorage.setItem("fav",JSON.stringify([]))
    }
    let [fav,setFav]=useState(favLocal || []);

    return (
        <FavouriteContext.Provider value={{fav,setFav}}>
            {children}
        </FavouriteContext.Provider>
    )
}
export default FavoriteProvider