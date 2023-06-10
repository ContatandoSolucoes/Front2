import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button, ImageBackground} from 'react-native';

import fundo from '../../assets/Fundo.png'

function PerfilDenuncia() {
  const [imageUri, setImageUri] = useState();

  return (
    <React.Fragment>

      <View style={styles.container}>

      <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>

        <View style={styles.divFoto}>
          {imageUri && <Image source={{uri: imageUri}} style={styles.imagemPerfil}/> }
        </View>

        <Text style={styles.title}>Denuncia</Text>

        <View style={styles.form}>

          <Text style={styles.infos}>Tipo de problema</Text>
          <Text style={styles.infos}>Quantidade de denuncia</Text>
          <Text style={styles.infos}>Endereço</Text>
          <Text style={styles.infos}>Descrição</Text>

        </View>

      </ImageBackground>

    </View>

    </React.Fragment>
    
  )
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
  },
  image :{
    flex : 1,
    justifyContent : 'center',
    width : "100%",
    alignItems : 'center',
  },
  divFoto:{
    width : 170,
    height : 170,
    backgroundColor : '#5271ff',
    borderRadius : 10,
    marginBottom: 25,
    alignItems : "center",
    justifyContent : "center",
    borderColor : '#5e5e5e',
    borderWidth : 2,
},
form:{
    width : "85%",
    height : "45%",
    backgroundColor : "#659ee4",
    borderRadius : 15,
    alignItems : 'center',
    justifyContent : 'center',
    borderWidth : 2,
    borderColor : '#5e5e5e',
},
infos:{
  backgroundColor : "#5271ff",
  fontSize : 23,
  width : 215,
  textAlign : 'center',
  marginBottom : 30,
  color : 'white',
  borderRadius: 5,
  borderColor : '#5e5e5e',
  borderWidth : 2,

},
title:{
  backgroundColor : "#5271ff",
  fontSize : 30,
  width : 190,
  textAlign : 'center',
  marginBottom : 30,
  color : 'white',
  borderRadius: 5,
  borderColor : '#5e5e5e',
  borderWidth : 2,
}
})

export default PerfilDenuncia