import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default function MapScreen({ navigation }) {
    return (
        <View>
            {/* <TouchableOpacity
                // style={tw`bg-gray-100 absolute top-16 left-4 z-50 p-3 rounded-full shadow-lg`}
                onPress={() => navigation.navigate("Home")}
            >
                <MaterialIcons name="menu" />
            </TouchableOpacity> */}

            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    // image={{ uri: 'custom_pin' }}
                    />
                </MapView>
            </View>

        </View>
    )
}