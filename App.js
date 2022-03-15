import { Header } from "react-native-elements"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from "react";
import db from "./localdb";
import PhonicSoundButton from "./PhonicSoundButton";


export default class App extends React.Component() {

  constructor(){
    super()
    this.state = {
      Changetext : '',
      Chunks : [],
      PhonicSound : []
    }
  }
  render(){
  return (
    <View style={styles.container}>
     <Header backgroundColor = {'black'} centerComponent = {{text : 'MonkeyChunkey', style : {fontSize : 5, color : 'white'}}} />
     <Image style = {styles.Imageicon} source = {{uri : "https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"}} />
     <TextInput style = {styles.Textinput} onChangeText = {Changetext =>{
       this.setState({
         Changetext : Changetext
       })
     }} />
     <TouchableOpacity style={styles.goButton} 
     onPress={() => { this.setState({ Chunks: db[this.state.text].chunks});
     this.setState({PhonicSound :db[this.state.text].phones})
     }}> <Text style={styles.buttonText}>GO</Text> </TouchableOpacity>
     <View>
       {
         this.state.Chunks.map((item, index) => {
           return(
             <PhonicSoundButton
               WordChunk = {this.state.Chunks[index]}
               SoundChunks = {this.state.PhonicSound[index]}
             />
           )
         })
       }
    </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    Textinput: { marginTop: 200, width: '80%', alignSelf: 'center', height: 40, textAlign: 'center', borderWidth: 4, outline: 'none', }, 
    goButton: { width: '50%', height: 55, alignSelf: 'center', padding: 10, margin: 10, }, 
    buttonText: { textAlign: 'center', fontSize: 30, fontWeight: 'bold', }, 
    displayText: { textAlign: 'center', fontSize: 30, },
    Imageicon: { width: 50, height: 50, marginLeft : 60 },
    ChunkButton:{width : 50, height : 50, margin : 50, alignItems :'center', padding: 5, borderWidth : 20, backgroundColor : 'black', font : 'bold'}
  },
});
