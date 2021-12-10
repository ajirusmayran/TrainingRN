import React, { useState, useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { Alert, Icon, Input, NativeBaseProvider, Stack } from 'native-base';
import { RootContext } from '../../App';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Profile({ navigation }) {
    const [value, setValue] = useState('');
    // const [nameState, setNameState] = useState('');
    // const [mailState, setMailState] = useState('');
    const { name, setName } = useContext(RootContext);
    const { mail, setMail } = useContext(RootContext);

    const onSubmit = () => {

    };

    return (
        <NativeBaseProvider>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                <Text style={{ color: 'black' }}> Profile...!!!</Text>

                <Stack space={4} w="100%" alignItems="center">
                    <Input
                        w={{
                            base: "75%",
                            md: "25%",
                        }}
                        InputLeftElement={
                            <Icon
                                as={<MaterialIcons name="person" />}
                                size={5}
                                ml="2"
                                color="muted.400"
                            />
                        }
                        placeholder="Name"
                        onChangeText={(name) => setName(name)}
                    />

                    <Input
                        w={{
                            base: "75%",
                            md: "25%",
                        }}
                        InputLeftElement={
                            <Icon
                                as={<MaterialIcons name="mail" />}
                                size={5}
                                ml="2"
                                color="muted.400"
                            />
                        }
                        placeholder="Email"
                        onChangeText={(mail) => setMail(mail)}
                    />
                </Stack>
                <View style={{ paddingTop: 10 }} />
                <Button title='Submit' onPress={onSubmit} />

                <View style={{ paddingTop: 20 }} />

                <Button
                    title="My Account"
                    onPress={() => navigation.navigate('MyAccount')}
                />

                <View style={{ paddingTop: 5 }} />
                <Button
                    title="History"
                    onPress={() => navigation.navigate('History')}
                />
            </View>
        </NativeBaseProvider>
    );
}
