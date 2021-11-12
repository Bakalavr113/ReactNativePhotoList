import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./components/Navitgation/Navigation";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useSelector } from "react-redux";
import configureStore  from "./redux/redux-store"
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
const { store, persistor } = configureStore()
export default function App() {
  const [state, setstate] = useState(false)
 const loadImages =  async () =>  {
    const images =   [require('./assets/bg.jpg')];
    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    }); 
    return Promise.all(cacheImages);
  }
  return (
    state ? <Provider store={store}>
    <PersistGate loading={<View><Text>loading...</Text></View>} persistor={persistor}>  
      <Navigation />
    </PersistGate>
  </Provider> :
   <AppLoading
   startAsync={loadImages}
   onFinish={() =>setstate(!state)}
   onError={console.warn}
 />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
