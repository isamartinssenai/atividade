import {ImageBackground, StyleSheet} from 'react-native';




 
export default function Backgroung({children}){

  const image = {uri: 'https://i.pinimg.com/736x/ca/55/0b/ca550b01d5b66dacd10e3ae06af30b16.jpg'};
  return(
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {children}
      </ImageBackground>
    
  )
}
const styles = StyleSheet.create({
  
  image: {
    flex: 1,
    
  },
  
});

