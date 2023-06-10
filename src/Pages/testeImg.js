import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image} from 'react-native';
import api from '../api.js';
import React, { useEffect, useState } from 'react';



function testeImg() {

  const [img,setImg] = useState([])

  useEffect(()=>{
    async function getImg(){
      const {data} = await api.get('/imgView');
      setImg(data);
    }
    getImg();
  },[img]);
  return (
    <>
      <Text>hello world</Text>
        {
          img.map((item)=>(
            <Image 
              source={{ uri: item}} 
              style={{ width: 200, height: 200 }} 
            />

          ))
        }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default testeImg
