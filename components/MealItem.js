import {View,Text,Image,StyleSheet,Platform,Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails'

function MealItem({title,id,imageUrl,affordability,complexity,duration}){

    const navgiation = useNavigation()
    function selectMealItemHandler(){
            navgiation.navigate('MealDetail',{mealId:id})
    }

    return <View style={styles.mealItem}>
        <Pressable
        android_ripple={{color:"#ccc"}}
        style={({pressed}) => (pressed ? styles.buttonPressed:null)}
        onPress={selectMealItemHandler}
        >
            <View style={styles.innerContainer}>
                <View>
                <Text style={styles.title}>{title}</Text>
    <Image source={{uri:imageUrl}} style={styles.image}/>
                </View>
                <MealDetails affordability={affordability} duration={duration} complexity={complexity}/>
     
    </View>
    </Pressable>
</View>
}

export default MealItem

const styles = StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:Platform.OS === 'android' ? "hidden":"visible",
        backgroundColor:"white",
        elevation:4,
        shadowColor:"black",
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:38,
    },
    innerContainer:{
        borderRadius:8,
        overflow:"hidden"
    },
    image:{
        width:"100%",
        height:200
    },
    buttonPressed:{
        opacity:0.5
    },
    title:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:18,
        margin:8
    }
})