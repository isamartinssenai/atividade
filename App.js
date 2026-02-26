import Container from "./componentes/container";
import Titulo from "./componentes/titulo";
import Label from "./componentes/label";
import Input from "./componentes/input";
import Botao from "./componentes/botao";
import Backgroung from "./componentes/background";
import { Alert, Image, View} from "react-native";

export default function App() {
  return (
    <Backgroung>
      <Container>
        <Titulo tit={"Login"}/>
        
        <View style={{flexDirection:"row", alignContent:"flex-start"}}>
          <Label label={"Nome.:"}/>     
          <Input/>
        </View>     
        
        <View style={{flexDirection:"row", alignContent:"flex-end"}}>
          <Label label={"Email.:"}/>     
          <Input/>
        </View>
        
        <View style={{flexDirection:"row", alignContent:"flex-end"}}>
          <Label label={"Senha.:"}/>     
          <Input/>
        </View>
        
        <Botao onPress={()=>Alert.alert("Sucesso", "Login concluído com sucesso")} txtBtn={"Aperte para logar!"}/>
        
        <Image source={require("./assets/logo.png")} style={{height:100,width:178,marginTop: 30,marginBottom: 20}}/>
      </Container>
    </Backgroung>
  );
}