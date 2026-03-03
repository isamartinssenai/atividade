import Container from "../componentes/container";
import Titulo from "../componentes/titulo";
import Label from "../componentes/label";
import Input from "../componentes/input";
import Botao from "../componentes/botao";
import Backgroung from "../componentes/background";
import { Alert, Image, View} from "react-native";

export default function Login({navigation}) {
  return (
    <Backgroung>
      <Container>
        <Titulo tit={"Login"}/>
        
        <View style={{flexDirection:"row", alignContent:"flex-start"}}>
          <Label label={"User.:"}/>     
          <Input placeholder={"Digite seu user..."}/>
        </View>     
        
        <View style={{flexDirection:"row", alignContent:"flex-end"}}>
          <Label label={"Email.:"}/>     
          <Input placeholder={"Digite seu email..."}/>
        </View>
        
        <View style={{flexDirection:"row", alignContent:"flex-end"}}>
          <Label label={"Senha.:"}/>     
          <Input placeholder={"Digite sua senha..."}/>
        </View>
        
        <Botao onPress={()=>Alert.alert("Sucesso!", "Login concluído com sucesso")} txtBtn={"Aperte para logar!"}/>
        
        <Image source={require("../assets/imagens/logo.png")} style={{height:100,width:178,marginTop: 30,marginBottom: 20}}/>
      </Container>
    </Backgroung>
  );
}

