
import React from 'react';
import {
    Box,
    Text,
    Icon,
    HStack,
    StatusBar,
    IconButton,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function AppBar() {
    const navigation = useNavigation();

    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor="#d00000" barStyle="light-content" />

            <Box safeAreaTop backgroundColor="#6200ee" />

            <HStack bg='#ae2012' px="1" py="3" justifyContent='space-between' alignItems='center'>
                <HStack space="4" alignItems='center'>
                    <Text color="white" fontSize="20" fontWeight='bold' style={{ paddingLeft: 10 }} > Home </Text>
                </HStack>
                <HStack space="2">
                    <IconButton icon={<Icon as={<MaterialIcons name='camera-alt' />} size='sm' color="white" />} onPress={() => navigation.navigate('CameraScreenView')} />
                    {/* <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} /> */}
                    <IconButton icon={<Icon as={<MaterialIcons name='mail' />} size='sm' color="white" />} onPress={() => navigation.navigate('InboxScreen')} />
                    <IconButton icon={<Icon as={<MaterialIcons name='search' />} color="white" size='sm' />} />
                    <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
                </HStack>
            </HStack>
        </NativeBaseProvider>
    );
}