import { useNavigation } from "@react-navigation/native"
import { View,StyleSheet, Pressable,Image,Text } from "react-native"
import MealDetails from '../MealDetails'

function MealItem({id,title,complexity,duration,affordability,imageUrl}){

        const navigation = useNavigation()

return <View style={styles.mealItem}>
        <Pressable
        android_ripple={{color:'#ccc'}}
        style={({pressed}) => (pressed?styles.buttonPressed:null)}
        onPress={()=>navigation.navigate('MealDetail',{mealId:id})}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri:imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                    <MealDetails
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                    />
            </View>
        </Pressable>
</View>
}

export default MealItem

const styles = StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        backgroundColor:"#FFF",
        elevation:4,
        shadowColor:"black",
        shadowOffset:{width:0,height:50},
        shadowOpacity:0.25,
        shadowRadius:8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
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
        fontSize:20,
        color:"black"
    },
    innerContainer:{
        borderRadius:8,
    }
})