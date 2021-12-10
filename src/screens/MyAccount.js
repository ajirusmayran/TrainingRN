import React, { useContext } from 'react';
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
    View,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RootContext } from '../../App';

export default function MyAccount({ navigation }) {
    const context = useContext(RootContext);

    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor="#d00000" barStyle="light-content" />

            <Box safeAreaTop backgroundColor="#6200ee" />

            <HStack bg='#ae2012' px="1" py="3" justifyContent='space-between' alignItems='center'>
                <HStack space="4" alignItems='center'>
                    <IconButton icon={<Icon size="sm" as={<MaterialIcons name='arrow-back-ios' />} color="white" onPress={() => navigation.goBack()} />} />
                    <Text color="white" fontSize="20" fontWeight='bold'>My Account</Text>
                </HStack>
                <HStack space="2">
                    {/* <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} /> */}
                    <IconButton icon={<Icon as={<MaterialIcons name='search' />}
                        color="white" size='sm' />} />
                    <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
                </HStack>
            </HStack>

            <Box
                bg="primary.600"
                py="4"
                px="3"
                rounded="md"
                alignSelf="center"
                width={375}
                maxWidth="100%"
            >
                <HStack justifyContent="space-between">
                    <Box justifyContent="space-between">
                        <VStack space="2">
                            <Text color="white" fontSize="lg"> Hello !!! {context.name} </Text>
                            <Text color="white" fontSize="lg"> {context.mail} </Text>
                            <Text fontSize="sm" color="white">
                                Today @ 9PM
                            </Text>
                            <Text color="white" fontSize="lg">
                                Let's talk about avatar!
                            </Text>
                        </VStack>
                        <Pressable
                            rounded="sm"
                            bg="primary.400"
                            alignSelf="flex-start"
                            py="4"
                            px="3"
                        >
                            <Text
                                textTransform="uppercase"
                                fontSize="sm"
                                fontWeight="bold"
                                color="white"
                            >
                                Remind me
                            </Text>
                        </Pressable>
                    </Box>
                    <Image
                        source={{
                            uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
                        }}
                        alt="Aang flying and surrounded by clouds"
                        height="100"
                        rounded="full"
                        width="100"
                    />
                </HStack>
            </Box>
        </NativeBaseProvider>
    );
}