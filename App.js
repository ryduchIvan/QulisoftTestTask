import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffects, useState } from "react";
import React from 'react';
//Components
import { Navigation } from "./screens/Navigation";
//Redux
import { Provider } from "react-redux";
import { store } from "./store/index";
export default function App() {
  const [image, setimage] = useState([]);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

//https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043
