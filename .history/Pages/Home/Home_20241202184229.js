import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
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
      <View style={styles.SearchBarContainer}>
        <TextInput
          placeholder="Search City"
          placeholderTextColor={'lightgray'}
          style={styles.SearchBar}
        />
        <Pressable>
          <FontAwesomeIcon icon={} size={scaleFontsSize(23)} color={'#ffffff'}/>
        </Pressable>

      </View>
    </SafeAreaView>
  );
};
export default Home;
