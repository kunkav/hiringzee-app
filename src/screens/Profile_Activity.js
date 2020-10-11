import React, {Component} from 'react';
 
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
 
export default class Profile_Activity extends Component {

  
    state={
      profilePic : null,
    };
  
 
  static navigationOptions =
    {
      title: 'Profile',
    };

    chooseFile = async () => {
      this.setState(await ImagePicker.launchImageLibraryAsync ());
      console.log(profilePic);
    };
    
 
    render() {
      const profilePic = this.state;
      console.log('render profilePicObject ', profilePic);
 
      return (
 
        <View style={styles.container}>
          <View style={styles.header}></View>
      {profilePic && 
       ( <Image style={styles.avatar} source={ { uri: profilePic.uri }}/> 
       )
      }       
          <TouchableOpacity onPress = { this.chooseFile } >
            <MaterialIcons name="create" style= {{ marginLeft: 220, marginTop: 20 }} size={30}/>
          </TouchableOpacity>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <TouchableOpacity onPress = { this.chooseFile } >
                <MaterialIcons name="create" style= {{ marginLeft: 220, marginTop: 20 }} size={30}/>
              </TouchableOpacity>
              <Text style={styles.description}>Hi My name is joe. I have 3 years of experience in software development.</Text>
              <TouchableOpacity onPress = { this.chooseFile } >
                <MaterialIcons name="create" style= {{ marginLeft: 220, marginTop: 20 }} size={30}/>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 1</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 2</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
      
      );
    }
  }


  const styles = StyleSheet.create({
    header:{
      backgroundColor: "#00BFFF",
      height:100,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:30
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:10,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
  });
  