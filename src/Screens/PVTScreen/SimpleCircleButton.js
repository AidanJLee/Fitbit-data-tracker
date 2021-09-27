import {React, Component , useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Alert} from 'react-native';
import BackgroundTimer from "react-native-background-timer";
import { useEffect } from 'react';

export default class SimpleCircleButton extends Component {
  constructor(props) {
    super(props);    
    this.state = { colorId:0 };
    this.state = { second:0 };
  }
  onPress = () => {
    if (this.state.colorId === 1)
    {
      this.setState({colorId: 0});
    }
    else 
    {
      this.setState({colorId: 1});
      const min = 10;
      const max = 40;
      const rand = min + Math.random() * (max - min); //use this to set timer, number will be in increments of tenths of seconds ie 4 seconds = 40 tenths. this is needed to get the timer accurate
      alert(rand);
    }
  };

  onStart = (rand) => {
    this.interval = BackgroundTimer.setInterval(() => {
      this.setState({
        second: this.state.second + 1,
      })
    }, 100)
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={.8} //The opacity of the button when it is pressed
          style={this.state.colorId === 1? styles.buttonOff : styles.buttonOn}
          onPress={()=>this.onPress()}       
        >
            <Text style={styles.text}>CLICK TO START</Text>
          {this.props.children}
        </TouchableOpacity>
      </View>
    )
  }
}



const devHeight = Dimensions.get('window').height;
const devWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 0,
    //backgroundColor: 'rgba(255,95,28,1)', //add a background to highlight the touchable area
    alignItems: 'center',
    marginBottom:50
  },
  buttonOn: {
    backgroundColor: 'rgba(0,210,0,1)',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 3,
    borderRadius: devWidth * 4 / 5,
    width: devWidth * 4 / 5,
    height: devWidth * 4 / 5,
    borderColor: 'rgba(0,210,0,1)'
  }  ,
  buttonOff: {
    backgroundColor: 'rgba(210,0,0,1)',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 3,
    borderRadius: devWidth * 4 / 5,
    width: devWidth * 4 / 5,
    height: devWidth * 4 / 5,
    borderColor: 'rgba(210,0,0,1)'
  }  ,
  text: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: devWidth /4.2
  },
});

/*NOTE: THIS IS USED BASED ON A TUTORIAL AT https://www.jsparling.com/round-buttons-in-react-native/*/