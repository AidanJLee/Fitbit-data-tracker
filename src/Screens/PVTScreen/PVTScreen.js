import React from "react";
import SimpleCircleButton from "./SimpleCircleButton";
import { StyleSheet, Button, View, Text, Dimensions } from 'react-native';


const devHeight = Dimensions.get('window').height;
const devWidth = Dimensions.get('window').width;

export default function PVTScreen(props) {
    let localStyles = styles

    return (
        <View style={localStyles.container}>        
            <SimpleCircleButton/>
            <Button style={localStyles.button}
                title="End Test"
            />
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
      position: 'relative',
      zIndex: 0,
      backgroundColor: 'rgba(255,95,28,1)', //add a background to highlight the touchable area
      alignItems: 'center',
      marginTop:devHeight/4,
      marginBottom: devHeight/4
    },
    button: {
        color: 'brown',
        marginTop:50,
        width:150
    }
  });
  
