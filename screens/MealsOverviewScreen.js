import { useLayoutEffect } from 'react'
import {View,FlatList,StyleSheet} from 'react-native'
import MealItem from '../components/MealItem'

import { CATEGORIES, MEALS } from '../data/dummy-data'

function MealsOverviewScreen({route,navigation}){
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(catId) >=0)
    // console.log(displayedMeals)

    useLayoutEffect(() =>{
        const categoryTitle = CATEGORIES.find(category => category.id === catId).title
        navigation.setOptions({
            title:categoryTitle
        })
    },[catId,navigation])

    function renderMealItem(itemData){
            const item = itemData.item   
        const mealItemProps = {
                id: item.id,
                title:item.title,
                imageUrl:item.imageUrl,
                affordability :item.affordability,
                complexity:item.complexity,
                duration:item.duration
            
            }
            return <MealItem {...mealItemProps}/>
    }

return <View style={Styles.container}>
        <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        />
</View>
}

export default MealsOverviewScreen

const Styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})