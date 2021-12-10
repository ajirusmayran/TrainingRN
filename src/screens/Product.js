import React from 'react'
import { View, Text } from 'react-native'
import { Box, NativeBaseProvider } from 'native-base';

export default function Product() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}> Product...!!!</Text>

            <NativeBaseProvider>
                <Box
                    title="Product 1"
                    onPress={() => navigation.push('Product')}
                />

                <Box
                    title="Product 2"
                    onPress={() => navigation.push('Product')}
                />
            </NativeBaseProvider>

        </View>
    );
}
