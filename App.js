import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";


import Login from "./pages/login";
import Splash from "./pages/splash";
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";
import Cep from "./pages/cep";
import Conceito from "./pages/conceito";


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerTransparent:true,}}>
        <Stack.Screen name="Splash" component={Splash} options={{headerTitle:"", headerTransparent:true}}  /> 
        <Stack.Screen name="Cep" component={Cep} options={{headerTitle:"", headerTransparent:true, headerBackVisible:false}}/>  
        <Stack.Screen name="Login" component={Login} options={{headerTitle:"", headerTransparent:true, headerBackVisible:false}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerTitle:"", headerTransparent:true}}/>   

        <Stack.Screen name="Home" component={Home} options={{headerTitle:"", headerTransparent:true}}/>
        <Stack.Screen name="Conceito" component={Conceito} options={{headerTitle:"", headerTransparent:true, headerBackVisible:false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

