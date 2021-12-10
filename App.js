import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './src/screens/Details';
import NativeBaseScreen from './src/screens/NativeBaseScreen';
import MyAccount from './src/screens/MyAccount';
import History from './src/screens/History';
import MapScreen from './src/screens/MapScreen';
import CameraScreenView from './src/screens/CameraScreenView';
import FirebaseMessaging from './src/screens/FirebaseMessaging';
import AsyncStorageScreen from './src/screens/AsyncStorageScreen';
import InboxScreen from './src/screens/InboxScreen';
import DetailsDataInbox from './src/screens/DetailsDataInbox';


// Import Component
import BottomTab from './src/components/BottomTab';

export const RootContext = createContext();

function App() {
  
  const Provider = RootContext.Provider;

  const [name, setName] = useState();
  const [mail, setMail] = useState();

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider
        value={{
          name, setName,
          mail, setMail,
        }}
      >

        <Stack.Navigator initialRouteName="BottomTab">
          <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
          <Stack.Screen name="MyAccount" component={MyAccount} options={{ headerShown: false }} />
          <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
          <Stack.Screen name="NativeBaseScreen" component={NativeBaseScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CameraScreenView" component={CameraScreenView} options={{ headerShown: false }} />
          <Stack.Screen name="FirebaseMessaging" component={FirebaseMessaging} options={{ headerShown: false }} />
          <Stack.Screen name="AsyncStorageScreen" component={AsyncStorageScreen} options={{ headerShown: false }} />
          <Stack.Screen name="InboxScreen" component={InboxScreen} options={{ headerShown: false }} />
          <Stack.Screen name="DetailsDataInbox" component={DetailsDataInbox} options={{ headerShown: false }} />
        </Stack.Navigator>

      </Provider>
    </NavigationContainer>
  );
}

export default App;