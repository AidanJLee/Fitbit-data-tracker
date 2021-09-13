import React from "react";
import SimpleCircleButton from "./SimpleCircleButton";
import { StyleSheet, Button, View, Text, Dimensions } from 'react-native';


const devHeight = Dimensions.get('window').height;
const devWidth = Dimensions.get('window').width;

export default function PVTScreen(props) {
    let localStyles = styles

    return (
        <View>
            <View style={localStyles.instructionContainer}>
                <Text style={localStyles.heading}>Instructions</Text>
                <Text style={localStyles.instruction}>1. Click the green gutton to start</Text>
                <Text style={localStyles.instruction}>2. Wait for the button to change from red to green</Text>
                <Text style={localStyles.instruction}>3. Click the button once it turns green</Text>
                <Text style={localStyles.instruction}>4. Click 'End Test' to end the test early</Text>
            </View>
            <View style={localStyles.contentContainer}>
                <SimpleCircleButton />
                <Button style={localStyles.button}
                    title="End Test"
                />
            </View>
            <View style={localStyles.resultContainer}>
                <Text style={localStyles.heading}>Response Time: 0.345</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        position: 'relative',
        zIndex: 0,
        //backgroundColor: 'rgba(3,168,203,1)', //add a background to highlight the touchable area
        alignItems: 'center',
        marginBottom: devHeight / 10
    },
    button: {
        color: 'brown',
        marginTop: 50,
        width: 150
    },
    instructionContainer: {
        position: 'relative',
        zIndex: 0,
        //backgroundColor: 'rgba(160,95,28,1)', //add a background to highlight the touchable area
        marginTop: devHeight / 12,
        marginBottom: devHeight / 20,
        paddingLeft: devWidth * 0.025
    },
    heading: {
        fontWeight: "bold",
        fontSize: 20
    },
    instruction: {        
        fontSize: 16
    },
    resultContainer: 
    {
        paddingLeft: devWidth * 0.025
    }
});

