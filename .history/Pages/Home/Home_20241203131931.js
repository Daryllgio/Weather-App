import React, {useCallback, useState} from 'react';
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
import { faCalendar, faSun } from '@fortawesome/free-regular-svg-icons';
import {debounce} from 'lodash';
import { fetchLocations, fetchWeatherForecast } from '../../api/weather';
import { weatherImages } from '../../constants/constant';



const Home = () => {
  const [showSearch, setShowSearch] = useState(true);
  const [locations, setLocations] = useState([]);
  const [Weather, setWeather] = useState({});

  const ToggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSearch = value =>{
   if (value.length > 2){
    fetchLocations({cityName: value}).then(data=>{
      setLocations(data);
    });
   }
  };

  const handleLocation = (location) =>{
    setLocations([]);
    setShowSearch(false);
    fetchWeatherForecast({
      cityName:location.name,
      days: '7',
    }).then(data=>{
      setWeather(data);
    });

  };


  const handleTextDebounce = useCallback(
    debounce((value) => handleSearch(value), 100),
    [handleSearch]
  );

  const {current, location} = Weather || {};

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
              onChangeText={handleTextDebounce}
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
                  onPress={() => handleLocation(location)}
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size={scaleFontsSize(18)}
                    color="gray"
                  />
                  <Text style={styles.locationText}>
                    {location?.name}, {location?.country}
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
            {location?.name}
            </Text>
            <Text style={styles.forecastlocationText}>
            {location?.country}
            </Text>
          </View>
          <View style={styles.forecastImageContainer}>
            <Image
              source={weatherImages[current?.condition?.text] }
              style={styles.forecastImage}
              resizeMode="contain"
            />

          </View>
          {/* degrees Celsius*/}
          <View style={styles.DegreesStat}>
            <Text style={styles.DegreeNum}>
              {current?.temp_c}&#176;
            </Text>
            <Text style={styles.DegreeText}>
              {current?.condition?.text}
            </Text>
          </View>
          {/* Other Stats*/}
          <View style={styles.OtherStatsContainer}>
            <View style={styles.OtherStats}>
              <FontAwesomeIcon icon={faWind}  size={scaleFontsSize(24)} color="#ffffff"/>
              <Text style={styles.OtherStatsText}>{current?.wind_kph}km</Text>
            </View>
            <View style={styles.OtherStats}>
              <FontAwesomeIcon icon={faDroplet}  size={scaleFontsSize(24)} color="#ffffff"/>
              <Text style={styles.OtherStatsText}>{current?.humidity}%</Text>
            </View>
            <View style={styles.OtherStats}>
              <FontAwesomeIcon icon={faSun}  size={scaleFontsSize(24)} color="#ffffff"/>
              <Text style={styles.OtherStatsText}>{Weather?.forecast?.forecastday[0]?.astro?.sunrise}</Text>
            </View>
          </View>
          <View style={styles.DailyForecastContainer}>
            <View style={styles.OtherStats}>
              <FontAwesomeIcon icon={faCalendar}  size={scaleFontsSize(22)} color="#ffffff"/>
              <Text style={styles.OtherStatsText}>Daily Forecast</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.DailyForecastContent}>
              {Weather?.forecast?.forecastday?.map((item, index) => {
                    console.log('Condition text:', item?.day?.condition?.text);
                    console.log('Available weather images:', Object.keys(weatherImages));
                return(
                  <View key={index} style={styles.DailyForecastTab}>
                    <Image
                      source={weatherImages[item?.day?.condition?.text] || weatherImages.other}
                      style={styles.DailyForecastImage}
                      resizeMode="contain"
                    />
                    <Text style={styles.DailyForecastDayText}>
                      {new Date(item.date).toLocaleDateString('en-US', {weekday: 'short'})}
                    </Text>

                    <Text style={styles.DailyForecastDegreeText}>
                      {item?.day?.avgtemp_c}&#176;
                    </Text>
                  </View>

                );
              })};
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
