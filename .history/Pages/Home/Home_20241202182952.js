import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './styles';

const Home = () => {
  return(
    <SafeAreaView style={styles.PageContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000" // For Android - sets the background color
        translucent={false}      // For Android - controls whether StatusBar has a translucent background
      />
      <Image source={require('../../assets/images/bn.png')} />
      <Text>Home Screen of the Weather App</Text>
    </SafeAreaView>
  );
};
export default Home;
