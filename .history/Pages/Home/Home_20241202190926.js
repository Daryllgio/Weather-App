import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
        translucent={false}
      />
      <Image
        source={require('../../assets/Images/bg.png')}
        style={styles.backgroundImage}
        blurRadius={70}
      />
      <SafeAreaView style={styles.contentContainer}>
        {/* search section */}
        <View style={styles.searchSection}>
          <View style={styles.searchBarWrapper}>
            <TextInput
              placeholder="Search city"
              placeholderTextColor="lightgray"
              style={styles.searchInput}
            />
            <Pressable style={styles.searchButton}>
              <FontAwesomeIcon
                icon={'magnifying-glass'}
                size={scaleFontsSize(20)}
                color="#ffffff"
              />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Home;
