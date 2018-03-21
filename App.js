/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';


function getImage(icon) {
  switch (icon) {
    case 'clear_day':
      return require('./images/clear_day.png');
    case 'clear_night':
      return require('./images/clear_night.png');
    case 'cloudy_night':
      return require('./images/cloudy_night.png');
    case 'cloudy':
      return require('./images/cloudy.png');
    case 'degree':
      return require('./images/degree.png');
    case 'fog':
      return require('./images/fog.png');
    case 'ic_launcher':
      return require('./images/ic_launcher.png');
    case 'partly_cloudy':
    case 'partly-cloudy-night':
    case 'partly-cloudy-day':
      return require('./images/partly_cloudy.png');
    case 'rain':
      return require('./images/rain.png');
    case 'refresh':
      return require('./images/refresh.png');
    case 'sleet':
      return require('./images/sleet.png');
    case 'snow':
      return require('./images/snow.png');
    case 'sunny':
      return require('./images/sunny.png');
    case 'wind':
      return require('./images/wind.png');
  }
}


import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
var API_KEY = '94e20c84954a9c6a72e544826a540561';

var App = React.createClass({
  getInitialState: function() {
    return {
      temperature: null,
      humidity: null,
      windSpeed: null,
      icon: null,
      summary: '',
      loading: true
    }
  },
  componentWillMount: function() {
    
    fetch(`https://api.forecast.io/forecast/${KEY}/45.523220,-122.668752`)
      .then(res => res.json())
      .then(resJson => this.setState({
        temperature: resJson.currently.temperature,
        humidity: resJson.currently.humidity,
        windSpeed: resJson.currently.windSpeed,
        icon: resJson.currently.icon,
        summary: resJson.currently.summary,
        
        loading: false
      }))
  },
  render: function() {
    if (this.state.loading) {
      return (
        <ActivityIndicator animating size="large" />
        
      )
    }


    return (
      <View style={styles.container}>
        <View style={[styles.iconContainer, styles.center]}>
          <Image source={getImage(this.state.icon)} style={styles.image} />
          <Text style={styles.summaryText}>{this.state.summary}</Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text style={styles.lowerText}>Temperature: {this.state.temperature}°</Text>
          <Text style={styles.lowerText}>Humidity: {this.state.humidity}</Text>
          <Text style={styles.lowerText}>Wind Speed: {this.state.windSpeed}</Text>
        </View>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4defd2' 
  },
  image: {
    width: 200,
    height: 200
  },
  iconContainer: {
    flex: 1
  },
  numbersContainer: {
    flex: 1,
    alignItems: 'center' 
  },
  summaryText: {
    fontSize: 32,
    fontWeight: "300"
  },
  
  lowerText: {
    fontSize: 22,
    fontWeight: "100",
    marginTop: 10,
    marginBottom: 10,
    
  },
  center: {
    alignItems: 'center', 
    justifyContent: 'center'
  }
})


export default App;