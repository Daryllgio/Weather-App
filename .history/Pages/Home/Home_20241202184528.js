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
import { scaleFontsSize } from '../../assets/globalstyles/Scaling';


const Home = () => {
  return(
    <SafeAreaView style={styles.PageContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
        translucent={false}     
      />
      <Image source={require('../../assets/images/bn.png')} />
      <View style={styles.SearchBarContainer}>
        <TextInput
          placeholder="Search City"
          placeholderTextColor={'lightgray'}
          style={styles.SearchBar}
        />
        <Pressable>
          <FontAwesomeIcon icon ={'magnifying-glass'} size={scaleFontsSize(20)} colour={'#ffffff'}
        </Pressable>

      </View>
    </SafeAreaView>
  );
};
export default Home;
