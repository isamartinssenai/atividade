//import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Inicial from "./pages/inicial";

export default function App() {

  const Stack = createBottomTabNavigator();

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerTransparent:true,}}>

        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Inicial" component={Inicial}/>


      </Stack.Navigator>
    </NavigationContainer>

  );
}

