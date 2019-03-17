import React from 'react';
import { View, TextInput, Text, Button, Platform } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            errorMessage: null,
        };
    }

    componentWillMount() {
        // Expo.Location.getCurrentPositionAsync(options)
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location },
            console.log('location*****************', location)
        );
        console.log('location*****************', location)
    };


    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }
        return (
            <View>

                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                <Button
                    title="Location"
                    onPress={this._getLocationAsync}
                />
                <Text>{text}</Text>
            </View>
        );
    }
}