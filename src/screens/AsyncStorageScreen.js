import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AsyncStorageScreen() {

    const [storeDataState, setStoreDataState] = useState(null);

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@storage_Key', 'TEST DATA ASYNC STORAGE')
        } catch (e) {
            console.error(e);
        }
        console.log(e);
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key')
            if (value !== null) {
                setStoreDataState(value);
            }
        } catch (e) {
            console.error(e);
        }
        console.log(e);
    }

    const removeData = async (value) => {
        try {
            // Use removeItem //
            // await AsyncStorage.removeItem('@storage_Key')

            // Use setItem //
            await AsyncStorage.setItem('@storage_Key', '')
        } catch (e) {
            console.error(e);
        }
        console.log('DONE REMOVE');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}> ASYNC STORAGE !!! </Text>

            <View style={{ marginTop: 20 }} />

            <Text style={{ color: 'red' }}>{storeDataState}</Text>

            <View style={{ marginTop: 20 }} />

            <Button title='Store Data' onPress={storeData} />

            <View style={{ marginTop: 20 }} />

            <Button title='Get Data' onPress={getData} />

            <View style={{ marginTop: 20 }} />

            <Button title='Remove Data' onPress={removeData} />

        </View>
    )
}
