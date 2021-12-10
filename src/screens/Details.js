import React from 'react';
import { View, Button } from 'react-native';
import {
    NativeBaseProvider,
    Box,
    HStack,
    VStack,
    Text,
    Pressable,
    Image,
    StatusBar,
    IconButton,
    Icon,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Details({ navigation, route }) {

    const { itemId, otherParam } = route.params;

    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor="#d00000" barStyle="light-content" />

            <Box safeAreaTop backgroundColor="#6200ee" />

            <HStack bg='#ae2012' px="1" py="3" justifyContent='space-between' alignItems='center'>
                <HStack space="4" alignItems='center'>
                    <IconButton icon={<Icon size="sm" as={<MaterialIcons name='arrow-back-ios' />} color="white" onPress={() => navigation.goBack()} />} />
                    <Text color="white" fontSize="20" fontWeight='bold'>Details</Text>
                </HStack>
                <HStack space="2">
                    {/* <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} /> */}
                    <IconButton icon={<Icon as={<MaterialIcons name='search' />}
                        color="white" size='sm' />} />
                    <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
                </HStack>
            </HStack>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
                <Text style={{ color: 'white' }}> Details Screen </Text>
                <Text style={{ color: 'red' }}>itemId: {JSON.stringify(itemId)}</Text>
                <Text style={{ color: 'green' }}>otherParam: {JSON.stringify(otherParam)}</Text>

                <Button
                    title="Go to Details... again"
                    onPress={() => navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                    }
                />

                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

                <Button title="Go back" onPress={() => navigation.goBack()} />

                <Button
                    title="Go to Native Base Screen"
                    onPress={() => {
                        navigation.navigate('NativeBaseScreen');
                    }}
                />

            </View>
        </NativeBaseProvider>
    );
}
