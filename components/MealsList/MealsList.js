import { FlatList, Text, View } from "react-native";
import MealItem from "./MealItem";

function MealList({items}){
function renderMealItem(itemData){
    const item = itemData.item
const mealItemProps = {
    id:item.id,
    title:item.title,
    imageUrl:item.imageUrl,
    affordability:item.affordability,
    complexity:item.complexity,
    duration:item.duration
}

return <MealItem {...mealItemProps}/>
// return <MealItem id={item.id} title={item.title} imageUrl={item.imageUrl}/>
}


    return <FlatList
    data={items}
    renderItem={renderMealItem}
    // renderItem={hafsa => console.log("-->",hafsa.item)}
    />
}

export default MealList