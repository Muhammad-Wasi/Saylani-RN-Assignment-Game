import React from 'react';
import {
    Notifications,
} from 'expo';
import {
    Text,
    View,
} from 'react-native';

import { getToken } from './Token';

// export default class PushNotificationScreen extends React.Component {
//     async componentDidMount() {
//         let { status } = await Permissions.askAsync(Permissions.LOCATION);
//         if (status !== 'granted') {
//             this.setState({
//                 errorMessage: 'Permission to access location was denied',
//             });
//         }
//         Expo.Notifications.presentLocalNotificationAsync({ titie: 'Wasi', body: 'Hello' })
//     }

//     render() {
//         return (

//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>Hello World</Text>
//             </View>
//         );
//     }
// }




export default class PushNotificationScreen extends React.Component {

    async componentDidMount() {
        Notifications.presentLocalNotificationAsync({ title: 'Wasi', body: 'Mil Gaya' })
        getToken()
        // console.log('getToken()', getToken())
    }

    render() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Hello World</Text>
            </View>
        );
    }
}
