import React, {Component , useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Alert} from 'react-native';


export default class SimpleCircleButton extends Component {
  constructor(props) {
    super(props);    
    this.state = { 
      colorId:0 ,
      time: 0,
      isOn: false,
      start: 0,
      testInterval: 0,
      total: 0,
      isCountdown: false //used to indicate time between tests (true) and actual tests (false)
    };
    
    this.startStopwatch = this.startStopwatch.bind(this)
    this.stopStopwatch = this.stopStopwatch.bind(this)
    this.resetStopwatch = this.resetStopwatch.bind(this)

  }
  onPress = () => {
    if (this.state.colorId === 1) //the button is currently red
    {
      this.setState({colorId: 0});
      this.stopStopwatch();
      this.setState({total: this.state.total + this.state.time});
      this.resetStopwatch();
    }
    else //the button is currently green
    {
      this.setState({colorId: 1});

      var min = 1000; //min ms between tests
      var max = 4000; //max ms between tests
      var rand = min + Math.random() * (max - min); //interval between tests

      //alert(rand);

      this.setState({testInterval: rand});

      this.startStopwatch();
    }
  };

  startStopwatch() 
  {
    this.setState(
      {
        time: this.state.time,
        start: Date.now() - this.state.time,
        isOn: true
      })
    this.timer = setInterval(() => this.setState(
      {
        time: Date.now() - this.state.start
      })
      , 10);
    if (this.state.isCountdown && this.state.time > this.state.testInterval){
        //indicates that the time period between tests has elapsed
        this.setState({colorId: 0});
        //this.stopStopwatch();
        //var time = this.state.time;
        //this.setState({total: total + time});
        //this.resetStopwatch();
        alert('elapsed');
    }
  }

  stopStopwatch() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }

  resetStopwatch() {
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