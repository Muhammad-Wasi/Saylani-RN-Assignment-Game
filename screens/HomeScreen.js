import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, Accelerometer } from 'expo';

import { MonoText } from '../components/StyledText';
import { white } from 'ansi-colors';

export default class HomeScreen extends React.Component {

  // constructor(props) {
  //   super(props);
  state = {
    accelerometerData: {},
    left: null,
    jump: false,
    power: false,
    defence: false,
    top: null,
    bottom: null
  }
  // this._jump = this._jump.bind(this)
  // }

  static navigationOptions = {
    // header: null,
    title: 'React Native Game',
  };

  componentDidMount() {
    Accelerometer.addListener(accelerometerData => {
      var horizontalVal = accelerometerData.x * -300
      console.log('accelerometerData*****', horizontalVal)
      this.setState({ accelerometerData, left: horizontalVal > -30 ? horizontalVal : 0 });
    });
  }

  _jump = () => {
    this.setState({ jump: true })
    setTimeout(() => {
      this.setState({ jump: false })
    }, 1000)
  }

  _power = () => {
    console.log('_power')
    this.setState({ power: true, defence: false, jump: false, top: 60, bottom: 170 })
    // var interval = setInterval(() => {
    //   this.setState({ left: null, jump: null })
    // }, 10)
    setTimeout(() => {
      this.setState({ power: false, top: null, bottom: null })
      // clearInterval(interval)
    }, 2500)
  }

  _defence = () => {
    console.log('_defence')
    this.setState({ defence: true, power: false, jump: false })
    // var interval = setInterval(() => {
    //   this.setState({ left: null, jump: null })
    // }, 10)
    setTimeout(() => {
      this.setState({ defence: false })
      // clearInterval(interval)
    }, 2000)
  }

  render() {
    const { left, jump, defence, power, top, bottom } = this.state;
    return (
      <View style={styles.container}>
        <View>
          {/* <Image
            source={require("../assets/images/animated-gifs.gif")}
          /> */}
          <Image
            source={require("../assets/images/animated-gifs-of-airoplane.gif")}
          />
        </View>
        {
          jump ?
            <View style={{ position: 'absolute', top: bottom ? bottom : 160, left: left ? left : 10 }}>
              <Image
                source={require("../assets/images/iron-fly.gif")}
              />
            </View>
            :
            <View style={{ position: 'absolute', top: bottom ? bottom : 250, left: left ? left : 10 }}>
              {
                left && (left > 5 || left < -5) ?
                  <View>
                    <TouchableOpacity style={styles.opacity} onPress={this._power}>
                      {/* <Image
                        source={require("../assets/images/iron-walk.gif")}
                      /> */}
                      <Text style={styles.text}>Power</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._jump}>
                      {
                        power &&
                        <Image
                          source={require("../assets/images/iron-gem.gif")}
                        />
                      }
                      {
                        !power && !defence &&
                        <Image
                          source={require("../assets/images/iron-walk.gif")}
                        />
                      }
                      {
                        defence &&
                        <Image
                          source={require("../assets/images/ironman-shield.gif")}
                        />
                      }
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', backgroundColor: '#0b1f82', height: 30 }} onPress={this._defence}>
                      {/* <Image
                        source={require("../assets/images/iron-walk.gif")}
                      /> */}
                      <Text style={styles.text}>Defence</Text>
                    </TouchableOpacity>
                  </View>
                  :
                  <View>
                    <TouchableOpacity style={styles.opacity} onPress={this._power}>
                      {/* <Image
                        source={require("../assets/images/iron-walk.gif")}
                      /> */}
                      <Text style={styles.text}>Power</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._jump}>
                      {
                        power &&
                        <Image
                          source={require("../assets/images/iron-gem.gif")}
                        />
                      }
                      {
                        !power && !defence &&
                        <Image
                          source={require("../assets/images/iron-powa.gif")}
                        />
                        // <Image
                        //   source={require('../assets/images/ironman-longintro.gif')}
                        // />
                      }
                      {
                        defence &&
                        <Image
                          source={require("../assets/images/ironman-shield.gif")}
                        />
                      }
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.opacity} onPress={this._defence}>
                      {/* <Image
                        source={require("../assets/images/iron-walk.gif")}
                      /> */}
                      <Text style={styles.text}>Defence</Text>
                    </TouchableOpacity>
                  </View>

              }
              {/* <Image
                source={require('../assets/images/ironman-longintro.gif')}
              /> */}
            </View>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  manView: {
    borderWidth: 2,
    borderColor: 'yellow'
  },
  man: {
    position: "absolute",
    top: 330,
    left: 10
  },
  text: {
    color: 'white',
    fontSize: 16,
    backgroundColor: '#0b1f82',
    textAlign: 'center'
  },
  opacity: {
    justifyContent: 'center',
    backgroundColor: '#0b1f82',
    height: 30
  }
});
