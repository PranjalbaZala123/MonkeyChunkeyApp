import { Header } from "react-native-elements"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from "react";
import {Audio} from "expo-av";

export default class PhonicSoundButton extends React.Component{
    PlaySound = async SoundChunks =>{
        console.log(SoundChunks);
        var SoundLink =  "https://s3-whitehatjrcontent.whjr.online/phones/" + SoundChunks +".mp3";
    await Audio.Sound.createAsync ({
        uri : SoundLink,

    },{
        shouldPlay : true
    })
}
render(){
    return(
        <TouchableOpacity style={styles.chunkButton} onPress={() => { this.PlaySound(this.props.SoundChunks); }}> 
        <Text style={styles.displayText}>{this.props.SoundChunks}</Text> </TouchableOpacity>
    )
}
}
const styles = StyleSheet.create({
 displayText: { textAlign: 'center', fontSize: 30, color: 'white' },
 chunkButton:{ width: '60%', height: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 10, margin: 5, backgroundColor: 'red' }
});
