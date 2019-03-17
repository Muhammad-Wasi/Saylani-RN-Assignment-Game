import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, TextInput, Button } from 'react-native';
import firebase from 'firebase';



export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };



  async _click() {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Expo.Facebook.logInWithReadPermissionsAsync('<APP_ID>', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    // return <ExpoConfigView />;
    return (
      <View>
        <Button
          onPress={this._click}
          title="Facebook Authentication"
        />
      </View>
    )
  }
}
