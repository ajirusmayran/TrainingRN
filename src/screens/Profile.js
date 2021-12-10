import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Profile({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}> Profile...!!!</Text>

            <Button
                title="My Account"
                onPress={() => navigation.navigate('MyAccount')}
            />

            <Button
                title="History"
                onPress={() => navigation.navigate('History')}
            />
        </View>
    );
}
