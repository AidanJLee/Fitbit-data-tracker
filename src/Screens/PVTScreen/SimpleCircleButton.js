import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

export default class SimpleCircleButton extends React.Component {
  render(){
    let localStyles = styles(this.props) //need to load styles with props because the styles rely on prop values

    return (
      <View style={localStyles.container}>
        <TouchableOpacity
          activeOpacity={.8} //The opacity of the button when it is pressed
          style = {localStyles.button}
          onPress = {this.props.onPress}          
        >
            <Text style={localStyles.text}>CLICK TO START</Text>
          {this.props.children}
        </TouchableOpacity>
      </View>
    )
  }
}


const devHeight = Dimensions.get('window').height;
const devWidth = Dimensions.get('window').width;

const styles = (props) => StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 0,
    //backgroundColor: 'rgba(255,95,28,1)', //add a background to highlight the touchable area
    alignItems: 'center',
    marginBottom:50
  },
  button: {
    backgroundColor: 'rgba(0,210,0,1)',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 3,
    borderRadius: devWidth * 4 / 5,
    width: devWidth * 4 / 5,
    height: devWidth * 4 / 5,
    borderColor: 'rgba(0,210,0,1)'
  }
  ,
  text: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: devWidth /4.2
  }
});

/*NOTE: THIS IS USED BASED ON A TUTORIAL AT https://www.jsparling.com/round-buttons-in-react-native/*/