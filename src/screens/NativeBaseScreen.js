import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';

export default function NativeBaseScreen() {
    return (
        <NativeBaseProvider>
            <Box> HELLO NATIVE BASE SCREEN </Box>
        </NativeBaseProvider>
    );
}