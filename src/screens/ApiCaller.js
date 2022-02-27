import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import imgur from "../api/imgur";
import SwipeCards from "./SwipeCards";
import CardElements from "../CardElements";

const ApiCaller = (props) => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await imgur.get("Zf1o4Mq", {});
      setResults(response.data.data.images);
      //   console.log(response.data.data.images);
      console.log(CardElements);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  return <View></View>;
};

const styles = StyleSheet.create({});

export default ApiCaller;
