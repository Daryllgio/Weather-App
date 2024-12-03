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
      <Text>Home Screen of the Weather App</Text>
    </SafeAreaView>
  );
};
export default Home;
