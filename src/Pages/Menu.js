import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import back from "../../assets/Fundo.png"
import AsyncStorage from '@react-native-async-storage/async-storage';

function Menu() {

    const navigation = useNavigation();

    function handleLogout2 (){
        AsyncStorage.clear()
        navigation.navigate("Login")
    }

  return (
       <React.Fragment>
            <View style={styles.container}>
                <ImageBackground source={back} resizeMode="cover" style={styles.image}>
                    <View style={styles.divFoto}>
                        <Image></Image>
                    </View>
                    <Text style={styles.name}></Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}><Text style={styles.options1}>Perfil</Text></TouchableOpacity>{/**Perfil */}
                    <TouchableOpacity><Text style={styles.options3}>Problemas no aplicativo</Text></TouchableOpacity>{/**Problemas no aplicativo */}
                    <TouchableOpacity onPress={handleLogout2}><Text style={styles.options4}>Sair da conta</Text></TouchableOpacity>{/**Sair da conta */}
                </ImageBackground>
            </View>
       </React.Fragment>
  )
}
const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : "center",
        alignItems : 'center',
    },
    options1:{
        backgroundColor : "#5271ff",
        fontSize : 25,
        width : 200,
        height : 50,
        textAlign : 'center',
        borderColor : '#5e5e5e',
        borderWidth : 2,
        borderRadius : 7,
        color : 'white',
        paddingTop : 7,
        marginTop : 35,
    },
    options2:{
        backgroundColor : "#5271ff",
        fontSize : 25,
        width : 250,
        height : 75,
        textAlign : 'center',
        borderColor : '#5e5e5e',
        borderWidth : 2,
        borderRadius : 7,
        color : 'white',
        paddingTop : 6,
        marginTop : 35,
    },
    options3:{
        backgroundColor : "#5271ff",
        fontSize : 25,
        width : 250,
        height : 75,
        textAlign : 'center',
        borderColor : '#5e5e5e',
        borderWidth : 2,
        borderRadius : 7,
        color : 'white',
        paddingTop : 6,
        marginTop : 35,
        marginBottom : 50,
    },
    options4:{
        backgroundColor : "#5271ff",
        fontSize : 25,
        width : 250,
        height : 50,
        textAlign : 'center',
        borderColor : '#5e5e5e',
        borderWidth : 2,
        borderRadius : 7,
        color : 'white',
        paddingTop : 7,
        marginTop : 100,
         marginBottom : -100
    },
    divFoto:{
        width : 150,
        height : 150,
        backgroundColor : '#5271ff',
        borderRadius : 180,
        borderColor : '#5e5e5e',
        borderWidth : 2,
    },
    image :{
        flex : 1,
        justifyContent : 'center',
        width : "100%",
        alignItems : 'center',
      }
})
export default Menu