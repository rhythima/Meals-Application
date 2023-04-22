import {View,Text,StyleSheet} from 'react-native'

function MealDetails({affordability,duration,complexity,textStyle}){
return <View style={Styles.details}> 
               <Text style={[Styles.detailItem,textStyle]}>{affordability.toUpperCase()}</Text>
                <Text style={[Styles.detailItem,textStyle]}>{duration} m</Text>
                <Text style={[Styles.detailItem,textStyle]}>{complexity.toUpperCase()}</Text>
</View>
}

export default MealDetails

const Styles = StyleSheet.create({
    details:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        padding:8
    },
    detailItem:{
        marginHorizontal:10,
        fontSize:12
    }
})