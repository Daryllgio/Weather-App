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
import { faDroplet, faLocationDot, faMagnifyingGlass, faWind } from '@fortawesome/free-solid-svg-icons';
import { horizontalScale } from '../../assets/globalstyles/Scaling';
import { faCalendar, faSun } from '@fortawesome/free-regular-svg-icons';



const Home = () => {
  const [showSearch, setShowSearch] = useState(true);
  const [locations, setLocations] = useState([
    { id: 1, city: 'London', country: 'United Kingdom' },
    { id: 2, city: 'Paris', country: 'France' },
    { id: 3, city: 'New York', country: 'United States' },
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
        {locations.length > 0 && showSearch ? (
            <View style={styles.locationContainer}>
              {locations.map((location, index) => (
                <Pressable
                  key={location.id} // or key={index} if no id available
                  style={styles.locationTab}
                  // onPress={() => handleLocationSelect(location)}
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size={scaleFontsSize(18)}
                    color="gray"
                  />
                  <Text style={styles.locationText}>
                    {location.city}, {location.country}
                  </Text>
                </Pressable>
              ))}
            </View>
          ) : null
        }
        {/* forecast section */}
        <View style={styles.forecastContainer}>
          <View style={styles.forecastlocationTextContainer}>
            <Text style={[styles.forecastlocationText, {fontWeight:'bold'}]}>
              London,
            </Text>
            <Text style={[styles.forecastlocationText, {marginLeft: horizontalScale(12)}]}>
              United Kingdom
            </Text>
          </View>
          <View style={styles.forecastImageContainer}>
            <Image
              source={require('../../assets/Images/partlycloudy.png')}
              style={styles.forecastImage}
              resizeMode="contain"
            />

          </View>
          {/* degrees Celsius*/}
          <View style={styles.DegreesStat}>
            <Text style={styles.DegreeNum}>
              23&#176;
            </Text>
            <Text style={styles.DegreeText}>
              Partly Cloudy
            </Text>
          </View>
          {/* Other Stats*/}
          <View style={styles.OtherStatsContainer}>
            <View style={styles.OtherStats}>
              <FontAwesomeIcon icon={faWind}  size={scaleFontsSize(24)} color="#ffffff"/>
              <Text style={styles.OtherStatsText}>22km</Text>
            </View>
            <View style={styles.OtherStats}>
              <FontAwesomeIcon icon={faDroplet}  size={scaleFontsSize(24)} color="#ffffff"/>
              <Text style={styles.OtherStatsText}>23%</Text>
            </View>
            <View style={styles.OtherStats}>
              <FontAwesomeIcon icon={faSun}  size={scaleFontsSize(24)} color="#ffffff"/>
              <Text style={styles.OtherStatsText}>6:05 AM</Text>
            </View>
          </View>
          <View style={styles.DailyForecastContainer}>
            <View style={styles.OtherStats}>
              <FontAwesomeIcon icon={faCalendar}  size={scaleFontsSize(22)} color="#ffffff"/>
              <Text style={styles.OtherStatsText}>Daily Forecast</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
