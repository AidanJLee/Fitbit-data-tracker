import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Alert} from 'react-native';

export default class SimpleCircleButton extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 3};
    this.state = { colorId:0 };
  }
  onPress = () => {
    if (this.state.colorId === 1)
    {
      this.setState({colorId: 0});
    }
    else 
    {
      this.setState({colorId: 1});
      const min = 1;
      const max = 4;
      const rand = min + Math.random() * (max - min);
      alert(rand);
    }
  };

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