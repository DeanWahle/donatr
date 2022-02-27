import React, { useState } from "react";
import imgur from "../api/imgur";
import ApiCaller from "./ApiCaller";
import CardElements from "../CardElements";

const ApiData = (props) => {
  const [results, setResults] = useState([]);
  return (
    <View>
      <ApiCaller id={"Zf1o4Mq"} />
    </View>
  );
};

export default ApiCaller;
