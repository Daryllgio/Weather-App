import React, {useState} from 'react';
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
import { faLocationDot, faMagnifyingGlass, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  const [showSearch, setShowSearch] = useState(true);
  const [locations, setLocations] = useState([
    { id: 1, city: 'London, United Kingdom' },
    { id: 2, city: 'Paris, France' },
    { id: 3, city: 'New York, United States' },
  ]);

  const ToggleSearch = () => {
    setShowSearch(!showSearch);
  };


  return (
    <View style={styles.container}>
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
        <View style={[ styles.searchBarWrapper, showSearch ? { backgroundColor: 'rgba(255, 255, 255, 0.2)' } : null]}>
            { showSearch ? (
              <TextInput
              placeholder="Search city"
              placeholderTextColor="lightgray"
              style={styles.searchInput}
            />
            ) : null}
            <Pressable onPress={() => ToggleSearch()} style={styles.searchButton}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size={scaleFontsSize(20)}
                color="#ffffff"
              />
            </Pressable>
          </View>
        </View>
        {
          locations.length > 0 && showSearch ? (
            <View style = {styles.locationContainer}>
              <Pressable style={styles.locationTab}>
                <FontAwesomeIcon icon={faLocationDot} size={scaleFontsSize(17)}/>
                <Text style={styles.locationText}>
                  Douala, Cameroon
                </Text>
              </Pressable>
              <Pressable style={styles.locationTab}>
                <FontAwesomeIcon icon={faLocationDot} size={scaleFontsSize(17)}/>
                <Text style={styles.locationText}>
                  London, United Kingdom
                </Text>
              </Pressable>
              <Pressable style={styles.locationTab}>
                <FontAwesomeIcon icon={faLocationDot} size={scaleFontsSize(17)}/>
                <Text style={styles.locationText}>
                  Minneapolis, Minnesota
                </Text>
              </Pressable>
              <Pressable style={styles.locationTab}>
                <FontAwesomeIcon icon={faLocationDot} size={scaleFontsSize(17)}/>
                <Text style={styles.locationText}>
                  Indianapolis, Indiana
                </Text>
              </Pressable>

            </View>
          ) : null
        }
      </SafeAreaView>
    </View>
  );
};

export default Home;
