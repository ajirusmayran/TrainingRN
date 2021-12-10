import React from 'react';
import { View, Text, Button } from 'react-native';

// Import Component
import AppBar from '../components/AppBar';

export default function Home({ navigation }) {
    return (
        <>
            <AppBar />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
                <Text style={{ color: 'white' }}> Home Screen </Text>

                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />

                <View style={{ marginTop: 20 }} />

                <Button
                    title="Go to Firebase Messaging"
                    onPress={() => {
                        navigation.navigate('FirebaseMessaging');
                    }}
                />

                <View style={{ marginTop: 20 }} />

                <Button
                    title="Go to Async Storage"
                    onPress={() => {
                        navigation.navigate('AsyncStorageScreen');
                    }}
                />

            </View>
        </>
    );
}
