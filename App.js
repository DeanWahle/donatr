import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import SwipeCardScreen from "./src/screens/SwipeCards";
import ApiData from "./src/screens/ApiData";
import React, { useState } from "react";
import TitleScreen from "./src/screens/TitleScreen";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  useWindowDimensions,
} from "react-native";

const App = () => {
  const [list, setList] = useState([]);
  const [pressed, setPressed] = useState(false);

  return list.length === 0 ? (
    <View style={styles.card}>
      <TitleScreen
        pressed={pressed}
        setPressed={setPressed}
        list={list}
        setList={setList}
      />
    </View>
  ) : (
    <SwipeCardScreen list={list} />
  );
};
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
  },
});

export default App;
