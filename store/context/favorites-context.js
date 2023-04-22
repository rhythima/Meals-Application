import {useState,createContext} from 'react'

export const FavoritesContext = createContext()

function FavoritesContextProvider({children}){
const [favoritesMealIds,setFavoritesMealIds] = useState([])

function addFavorite(id){
    setFavoritesMealIds((currentFavIds) =>[...currentFavIds,id])
}
function removeFavorite(id){
    setFavoritesMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id))
}
const value ={
    ids:favoritesMealIds,
    addFavorite:addFavorite,
    removeFavorite:removeFavorite
}

return (
    <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
)

}

export default FavoritesContextProvider