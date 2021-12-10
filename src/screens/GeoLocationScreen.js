import React, { useEffect, useState } from 'react'
import { View, Text, Platform, PermissionsAndroid, Button } from 'react-native'
// import Geolocation from '@react-native-community/geolocation';
import Geolocation from 'react-native-geolocation-service';

export default function GeoLocationScreen({ navigation }) {

    const [currentLatitude, setCurrentLatitude] = useState("");
    const [currentLongitude, setCurrentLongitude] = useState("");

    useEffect(() => {
        const requestLocationPermission = async () => {
            if (Platform.OS === 'ios') {
                getOneTimeLocation();
                // subscribeLocationLocation();
            } else {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Location Access Required',
                            message: 'This App needs to Access your location',
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        getOneTimeLocation();
                    } else {
                        // setLocationStatus('Permission Denied');
                    }
                } catch (err) {
                    console.warn();
                }
            }
        }
        requestLocationPermission();
        return () => {
            // GeoLocation.clearWatch(watchID);
        };
    }, []);

    const getOneTimeLocation = () => {
        Geolocation.getCurrentPosition((position) => {
            const currentLongitude = JSON.stringify(position.coords.longitude);
            const currentLatitude = JSON.stringify(position.coords.latitude);
            setCurrentLongitude(currentLongitude);
            setCurrentLatitude(currentLatitude);
        }, (error) => {
            console.log(error.message);
            setLoading(false);
        }, {
            enableHighAccuracy: false,
            timeout: 3000,
            maximumAge: 1000
        });
    };

    const subscribeLocationLocation = () => {
        console.log('LOKASI MASUK')
        watchID = Geolocation.watchPosition(
            (position) => {
                const currentLongitude = position.coords.longitude;
                const currentLatitude = position.coords.latitude;

                console.log(position);

                setCurrentLongitude(currentLongitude);
                setCurrentLatitude(currentLatitude);
            }, (error) => {
                console.log(error.message);
                // setLoading(false);
            }, {
            enableHighAccuracy: true,
            maximumAge: 1000,
            distanceFilter: 10
        });
        console.log('LOKASI KELUAR')
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}> GEO LOCATION !!! </Text>
            <Text style={{ color: 'white' }}> LONGITUDE : {currentLongitude} </Text>
            <Text style={{ color: 'white' }}> LATITUDE : {currentLatitude} </Text>

            <Button
                title="Go to Maps Screen"
                onPress={() => {
                    navigation.navigate('MapScreen');
                }}
            />
        </View>
    )
}
