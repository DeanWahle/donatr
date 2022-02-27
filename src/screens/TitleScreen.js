import React, { useState } from "react";
import ApiCaller from "./ApiCaller";
import imgur from "../api/imgur";
import CardElements from "../CardElements";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  useWindowDimensions,
} from "react-native";

const TitleScreen = (props) => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      for (let i = 0; i < CardElements.length; i++) {
        // console.log(CardElements[i].id);
        const response = await imgur.get(CardElements[i].id, {});
        setResults(response.data.data.images);
        props.setList([...props.list, response.data.data.images[0].link]);
        // console.log(CardElements);
      }
      props.setPressed(true);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  return props.pressed ? (
    <Text>{results.length}</Text>
  ) : (
    <View>
      <Text>donatr</Text>
      <Button title={"Click to Start"} onPress={searchApi} />
    </View>
  );
};

export default TitleScreen;
