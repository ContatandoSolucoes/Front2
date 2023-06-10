import React from 'react'
import { View, StyleSheet, TextInput, TextInputComponent, Text, Image, Button, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import back from "../../assets/Fundo.png"

import api from '../api.js'
import useState from 'react-hook-use-state'
import { useNavigation } from '@react-navigation/native'

import Toast from 'react-native-toast-message';
import DateField from 'react-native-datefield';

function Cadastro() {

  function showToastErro(){
    Toast.show({
      type: "error",
      text1: "E-mail já cadastrado",
      text2: "Tente outro e-mail.",
      visibilityTime: 6000
    })
  }

  const showToastIncompleto = () => {
    Toast.show({
      type: 'error',
      text1: 'Dados incompletos',
      text2: 'Preencha todos os dados',
      visibilityTime: 6000
    });
  }

  const showToastSenha = () => {
    Toast.show({
      type: 'error',
      text1: 'Senhas diferentes',
      text2: 'As senhas não conferem.',
      visibilityTime: 6000
    });
  }
  
  function showToastSucesso(){
    Toast.show({
      type: "success",
      text1: "Cadastro realizado",
      text2: "Faça login no sistema.",
      visibilityTime: 6000
    });
  }
  
    const navigation = useNavigation() 

    const [email,setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [nome_usuario, setUserName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    
    async function handleRegister(event){

      if(email == "" || senha == "" || nome_usuario == ""|| telefone == "" || nascimento =="" ){
        showToastIncompleto()
      }
      else{
        if(senha != confirmaSenha){
          showToastSenha()
        }
        else{
          event.preventDefault()
        try{ 

            showToastSucesso()
                 
            const data = {
              nome_usuario,email,senha,telefone,nascimento
            };

            const response = await api.post('/user', data)
            
            navigation.navigate("Login")
        } catch(error){
            showToastErro()
            console.log(`>>> ${error}`)
        }
        
    }
  }
}
  return (
    
    <React.Fragment>
        <View style={styles.container}>
          <ImageBackground source={back} resizeMode="cover" style={styles.image}>
              <View style={styles.form}>
                  <Text style={styles.title}>Cadastro</Text>
                  
                  <Text style={styles.text}>Nome de usuario</Text>
                  <TextInput 
                  placeholder='Nome'style={styles.input}
                  value={nome_usuario}
                  onChangeText={event => setUserName(event)}
                  ></TextInput>

                  <Text style={styles.text}>Número de telefone</Text>
                  <TextInput 
                  placeholder='Telefone'style={styles.input}
                  inputMode='tel'
                  value={telefone}
                  onChangeText={event => setTelefone(event)}
                  ></TextInput>
                  
                  <Text style={styles.text}>Data de nascimento</Text>
                  <DateField 
                    styleInput={styles.date}
                    labelDate="Dia"
                    labelMonth="Mês"
                    labelYear="Ano"
                    onSubmit={e => setNascimento(e)}
                    />

                  <Text style={styles.text}>E-mail </Text>
                  <TextInput 
                  placeholder='Email'style={styles.input}
                  inputMode='email'
                  value={email}
                  onChangeText={event => setEmail(event)}
                  ></TextInput>
                  
                  <Text style={styles.text}>Senha</Text>
                  <TextInput 
                  placeholder='Senha'style={styles.input}
                  secureTextEntry={true}
                  value={senha}
                  onChangeText={event=>setSenha(event)}
                  ></TextInput>
                  
                  <Text style={styles.text}>Confirme a senha</Text>
                  <TextInput 
                  placeholder='Confirmar senha'style={styles.input}
                  secureTextEntry={true}
                  value={confirmaSenha}
                  onChangeText={event => setConfirmaSenha(event)}
                  ></TextInput>
                  
                  <TouchableOpacity onPress={handleRegister}><Text 
                  style={styles.entrar}
                  >Cadastrar</Text></TouchableOpacity>

              </View>
          </ImageBackground>
        </View>
        <Toast />
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form:{
        width : "85%",
        height : "80%",
        backgroundColor : "#659ee4",
        borderRadius : 15,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 2,
        borderColor : '#5e5e5e',
        marginTop: 20
    },
    input:{
        margin : 10,
        backgroundColor : 'white',
        width : '80%',
        height : 35,
        borderWidth : 1,
        borderColor : "#5e5e5e",
        borderRadius : 8,
        fontSize: 15,
        padding: 10,
      },
      title:{
        backgroundColor : "#5271ff",
        fontSize : 30,
        width : 150,
        textAlign : 'center',
        marginTop : 10,
        color : 'white',
        borderRadius : 5,
      },
      entrar:{
        backgroundColor : "#5271ff",
          fontSize : 25,
          width : 150,
          height : 40,
          textAlign : 'center',
          borderColor : '#5e5e5e',
          borderWidth : 2,
          borderRadius : 30,
          color : 'white',
          marginTop : 10,
          
          // alignItems : 'center'
      },
      image :{
        flex : 1,
        justifyContent : 'center',
        width : "100%",
        alignItems : 'center',
        flexDirection : 'column'
      },
      date: {
        backgroundColor : 'white',
        borderWidth : 1,
        borderColor : "#5e5e5e",
        borderRadius : 8,
        width : '25%',
        margin: 4,
        height: 35,
        fontSize: 15,
      },
      text: {
        fontSize: 16,
        margin: 5
      }
  });

export default Cadastro
