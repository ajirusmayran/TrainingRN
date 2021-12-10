import React, { useState } from 'react';
import { View } from 'react-native';
import {
    Box,
    FlatList,
    Heading,
    Avatar,
    HStack,
    VStack,
    Text,
    Spacer,
    Center,
    NativeBaseProvider,
    StatusBar,
    IconButton,
    Icon,
    Pressable,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function InboxScreen({ navigation: { navigate } }) {
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState(null);

    const data = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            fullName: "Aafreen Khan",
            timeStamp: "12:47 PM",
            recentText: "Good Day!",
            avatarUrl:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            fullName: "Sujitha Mathur",
            timeStamp: "11:11 PM",
            recentText: "Cheer up, there!",
            avatarUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            fullName: "Anci Barroco",
            timeStamp: "6:22 PM",
            recentText: "Good Day!",
            avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
        },
        {
            id: "68694a0f-3da1-431f-bd56-142371e29d72",
            fullName: "Aniket Kumar",
            timeStamp: "8:56 PM",
            recentText: "All the best",
            avatarUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
        },
        {
            id: "28694a0f-3da1-471f-bd96-142456e29d72",
            fullName: "Kiara",
            timeStamp: "12:47 PM",
            recentText: "I will call today.",
            avatarUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
        },
    ]
    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor="#d00000" barStyle="light-content" />

            <Box safeAreaTop backgroundColor="#6200ee" />

            <HStack bg='#ae2012' px="1" py="3" justifyContent='space-between' alignItems='center'>
                <HStack space="4" alignItems='center'>
                    <IconButton icon={<Icon size="sm" as={<MaterialIcons name='arrow-back-ios' />} color="white" onPress={() => navigation.goBack()} />} />
                    <Text color="white" fontSize="20" fontWeight='bold'>Inbox</Text>
                </HStack>
                <HStack space="2">
                    {/* <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} /> */}
                    <IconButton icon={<Icon as={<MaterialIcons name='search' />}
                        color="white" size='sm' />} />
                    <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
                </HStack>
            </HStack>

            <Center>
                <Box
                    w={{
                        base: "100%",
                        md: "25%",
                    }}
                >
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Pressable
                                onPress={() => setSelected(item)}
                                // style={{ backgroundColor: '#d00000' }, id === selected?.id}
                            >
                                <Box
                                    borderBottomWidth="1"
                                    _dark={{
                                        borderColor: "gray.600",
                                    }}
                                    borderColor="coolGray.200"
                                    pl="4"
                                    pr="5"
                                    py="2"
                                >
                                    <HStack space={3} justifyContent="space-between">
                                        <Avatar
                                            size="48px"
                                            source={{
                                                uri: item.avatarUrl,
                                            }}
                                        />
                                        <VStack>
                                            <Text
                                                _dark={{
                                                    color: "warmGray.50",
                                                }}
                                                color="coolGray.800"
                                                bold
                                            >
                                                {item.fullName}
                                            </Text>
                                            <Text
                                                color="coolGray.600"
                                                _dark={{
                                                    color: "warmGray.200",
                                                }}
                                            >
                                                {item.recentText}
                                            </Text>
                                        </VStack>
                                        <Spacer />
                                        <Text
                                            fontSize="xs"
                                            _dark={{
                                                color: "warmGray.50",
                                            }}
                                            color="coolGray.800"
                                            alignSelf="flex-start"
                                        >
                                            {item.timeStamp}
                                        </Text>
                                    </HStack>
                                </Box>
                            </Pressable>
                        )}
                    />
                </Box>
            </Center>
        </NativeBaseProvider>
    )
}