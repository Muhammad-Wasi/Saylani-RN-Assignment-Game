import React from 'react';
import { ScrollView, View, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';
// import { ExpoLinksView, MapView } from '@expo/samples';
import { WebBrowser, Accelerometer, Permissions, Contacts, MapView } from 'expo';


export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);

  }
  // static navigationOptions = {
  //   title: 'Links',
  // };

  // componentDidMount() {
  async showFirstContactAsync() {
    // Ask for permission to query contacts.
    const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    if (permission.status !== 'granted') {
      // Permission was denied...
      return;
    }
    const contacts = await Expo.Contacts.getContactsAsync({
      fields: [
        Expo.Contacts.PHONE_NUMBERS,
        Expo.Contacts.EMAILS,
      ],
      pageSize: 10,
      pageOffset: 0,
    });
    if (contacts.total > 0) {
      // console.log('Contacts*********', contacts.data),
      contacts.data.map((item) => {
        console.log('Contacts*********', item)
      })
      alert(
        'Your first contact is...',
        `Name: ${contacts.data[0].name}
  ` +
        `Phone numbers: ${JSON.stringify(contacts.data[0].phoneNumbers)}
  ` +
        `Emails: ${JSON.stringify(contacts.data[0].emails)}`
      );
    }
    // }
  }


  render() {

    return (
      <View style={styles.container}>
        {/* <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
        <Button
          title="Contacts"
          onPress={this.showFirstContactAsync.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
