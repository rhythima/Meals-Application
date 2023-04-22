import { useLayoutEffect,useContext } from 'react'
import {View,Text, ScrollView, Image,StyleSheet} from 'react-native'
import List from '../components/MealDetail/List'
import Subtitle from '../components/MealDetail/Subtitle'
import MealDetails from '../components/MealDetails'
import { MEALS } from '../data/dummy-data'
import IconButton from '../components/IconButton'
import { FavoritesContext } from '../store/context/favorites-context'
function MealDetailScreen({route,navigation}){

    const favoriteMealCtx = useContext(FavoritesContext)
    // console.log(favoriteMealCtx)
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    // console.log(selectedMeal)
    const mealIsFavorite = favoriteMealCtx.ids.includes(mealId)
    console.log(mealIsFavorite)
    function changeFavoritesStatusHandler(){
        if(mealIsFavorite){
            favoriteMealCtx.removeFavorite(mealId)
        }else{
            favoriteMealCtx.addFavorite(mealId)
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton icon={mealIsFavorite?'star':'star-outline'} color="white" onPress={changeFavoritesStatusHandler}/>
            }
        })
    },[navigation,changeFavoritesStatusHandler])
    return <ScrollView>
        <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients}/>
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps}/>
        </View>
        </View>
    </ScrollView>
}

export default MealDetailScreen

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:350
    },
    title:{
        fontWeight:"bold",
        fontSize:24,
        color:"white",
        textAlign:"center",
        margin:8
    },
    detailText:{
        color:"white"
    },
    listOuterContainer:{
        alignItems:"center"
    },
    listContainer:{
        width:"90%"
    }
})