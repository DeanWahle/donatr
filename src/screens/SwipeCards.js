// SwipeCards.js
'use strict';
 
import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ImageCard from '../Components/ImageCard';
import SwipeCards from 'react-native-swipe-cards';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
 
class MyCard extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Title>{this.props.text}</Title>
                    <Paragraph>{this.props.bio}</Paragraph>
                </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    )
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
    )
  }
}
 
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {text: 'Mary Reynolds Babcock Foundation', bio: "The Babcock Foundation’s mission is to help people and places move out of poverty and achieve greater social and economic justice."},
        {text: 'Youth Achieving Moral Maturity "YAMM"', bio: 'We exist to build moral standards guidance and leadership skills in youth. ​We vision underserved youth and families building resiliency through teamwork, critical thinking, and self-confidence to achieve self-sufficiency.le'},
        {text: 'H.A.R.R.Y Veterans Community Outreach Services', bio: 'H.A.R.R.Y Veterans Community Outreach Service is an organization that provides goods and services to individuals through the Supported Employment and Empowerment Programs-S.E.E.P.  SEEP is a comprehensive program that serves veterans and their eligible family members.'},
        {text: 'HOPE of Winston-Salem', bio: 'Our mission is to use community-wide volunteer support to prepare and bring nutritious weekend meals to the thousands of children in Forsyth County who are at risk for hunger. You can help!'},
        {text: 'Springwell Network', bio: 'Springwell Network, Inc., Inc. provides quality residential care and training for adult persons with mental challenges and/or other intellectual developmental disabilities and consistently looks for innovative resources and means for the expansion of services for these individuals.'},
        {text: 'Forsyth Humane Society', bio: 'Our Mission is to promote and provide for the humane treatment of cats and dogs in Forsyth County, North Carolina.'},
        {text: 'Reynolds Kate B Charitable Trust', bio: 'We support promising programs, systems change work, and innovative ideas that help residents and communities thrive, increase equitable access to health care, and achieve equitable health outcomes.'},
        {text: 'Forsyth Humane Society', bio: 'The Legacy Foundation for Women is a philanthropic women\'s foundation that celebrates and invests in the lives of women and girls of color through scholarships and education, award recognition, health development projects, humanitarian efforts, and mentor programs. '},
      ]
    };
  }
 
  handleYup (subCard) {
    console.log(`Yup for ${subCard.text}`)
  }
  handleNope (subCard) {
    console.log(`Nope for ${subCard.text}`)
  }
  handleMaybe (subCard) {
    console.log(`Maybe for ${subCard.text}`)
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <MyCard {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
 
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    )
  }
}
 
const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
  }
})