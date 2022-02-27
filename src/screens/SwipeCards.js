// SwipeCards.js
"use strict";

import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import RenderHtml from "react-native-render-html";
import ImageCard from "../Components/ImageCard";
import SwipeCards from "react-native-swipe-cards";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import img from "../images/download.jpg";
import ApiCaller from "./ApiCaller";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

class MyCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Title>{this.props.title}</Title>
          <Paragraph>{this.props.bio}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: this.props.link }} />
        <Card.Actions>
          {/* <Button>Cancel</Button>
          <Button>Ok</Button> */}
        </Card.Actions>
        <ApiCaller />
      </Card>
    );
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          title: "Forsyth Humane Society",
          link: "https://i.imgur.com/7EH8XI0.jpg",
          bio: "Our Mission is to promote and provide for the humane treatment of cats and dogs in Forsyth County, North Carolina.",
        },
        {
          title: "A. Bailey Legacy Foundation for Women",
          bio: "The Babcock Foundation’s mission is to help people and places move out of poverty and achieve greater social and economic justice.",
          id: "Zf1o4Mq",
          location: "Winston-Salem, North Carolina",
          link: "https://i.imgur.com/2YBui3I.jpg",
        },
        {
          title: 'Youth Achieving Moral Maturity "YAMM"',
          link: "https://i.imgur.com/D67KqST.jpeg",
          bio: "We exist to build moral standards guidance and leadership skills in youth. ​We vision underserved youth and families building resiliency through teamwork, critical thinking, and self-confidence to achieve self-sufficiency.le",
        },
        {
          title: "H.A.R.R.Y Veterans Community Outreach Services",
          link: "https://i.imgur.com/UWzueJo.jpg",
          bio: "H.A.R.R.Y Veterans Community Outreach Service is an organization that provides goods and services to individuals through the Supported Employment and Empowerment Programs-S.E.E.P.  SEEP is a comprehensive program that serves veterans and their eligible family members.",
        },
        {
          title: "HOPE of Winston-Salem",
          link: "https://i.imgur.com/Cnnx8vz.jpg",
          bio: "Our mission is to use community-wide volunteer support to prepare and bring nutritious weekend meals to the thousands of children in Forsyth County who are at risk for hunger. You can help!",
        },
        {
          title: "Springwell Network",
          link: "https://i.imgur.com/IhI9oIo.jpeg",
          bio: "Springwell Network, Inc., Inc. provides quality residential care and training for adult persons with mental challenges and/or other intellectual developmental disabilities and consistently looks for innovative resources and means for the expansion of services for these individuals.",
        },

        {
          title: "Reynolds Kate B Charitable Trust",
          link: "https://i.imgur.com/YOp6RML.jpeg",
          bio: "We support promising programs, systems change work, and innovative ideas that help residents and communities thrive, increase equitable access to health care, and achieve equitable health outcomes.",
        },
      ],
    };
  }

  handleYup(subCard) {
    console.log(`Yup for ${subCard.text}`);
  }
  handleNope(subCard) {
    console.log(`Nope for ${subCard.text}`);
  }
  handleMaybe(subCard) {
    console.log(`Maybe for ${subCard.text}`);
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <>
        <SwipeCards
          list={this.props.list}
          cards={this.state.cards}
          renderCard={(cardData) => <MyCard {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          handleMaybe={this.handleMaybe}
          hasMaybeAction
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
    paddingTop: 100,
    flex: 1,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
});
