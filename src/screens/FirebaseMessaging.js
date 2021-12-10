import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import messaging from '@react-native-firebase/messaging';

export default function FirebaseMessaging() {

    useEffect(() => {
        // Get the device token
        messaging()
            .getToken()
            .then(token => {
                console.log(token);
            });
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
            <Text style={{ fontSize: 25, color: 'white' }}> FIREBASE MESSAGING !!! </Text>
        </View>
    )
}
