import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import {Ionicons} from '@expo/vector-icons'
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

function DrawerNavigator(){

  return <Drawer.Navigator 
  screenOptions={{
    headerStyle:{backgroundColor:"#351401"},
    headerTintColor:"white",
    sceneContainerStyle:{backgroundColor:"#3f2f25"},
    drawerContentStyle:{backgroundColor:"#351401"},
    drawerActiveTintColor:"#351401",
    drawerInactiveTintColor:"white",
    drawerActiveBackgroundColor:"#e4baa1"
  }}
  >
          <Drawer.Screen 
          name='Categories' 
          component={CategoriesScreen}
          options={{
            title:"All Categories",
            drawerIcon:({color,size}) =>{
              return <Ionicons name='list' color={color} size={size}/>
            }
          }}
          />
          <Drawer.Screen 
          name='Favorites' 
          component={FavoritesScreen}
          options={{
            drawerIcon:({color,size}) =>{
              return <Ionicons name='star' color={color} size={size}/>
            }
          }}
          />
  </Drawer.Navigator>
}

export default function App() {
  return (
  
    <>      
    <StatusBar style="light" />
    <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle:{backgroundColor:"#351401"},
          headerTintColor:"white",
          contentStyle:{backgroundColor:"#3f2f25"}
        }}
        >
          <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{headerShown:false}}/>
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
          <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </FavoritesContextProvider>
      </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
