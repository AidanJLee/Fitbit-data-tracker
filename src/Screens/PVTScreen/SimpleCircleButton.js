import React, {Component , useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Alert} from 'react-native';


export default class SimpleCircleButton extends Component {
  constructor(props) {
    super(props);    
    this.state = { 
      colorId:0 ,
      time: 0,
      isOn: false,
      start: 0
    };
    
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)

  }
  onPress = () => {
    if (this.state.colorId === 1)
    {
      this.setState({colorId: 0});
      this.stopTimer();
      var time = this.state.time;
      this.resetTimer();
    }
    else 
    {
      this.setState({colorId: 1});
      const min = 10;
      const max = 40;
      const rand = min + Math.random() * (max - min); //use this to set timer, number will be in increments of tenths of seconds ie 4 seconds = 40 tenths. this is needed to get the timer accurate
      alert(rand);

      this.startTimer();
    }
  };

  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 100);
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({time: 0})
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>s: {this.state.time}</Text>
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