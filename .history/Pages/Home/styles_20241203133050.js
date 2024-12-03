import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, scaleFontsSize } from '../../assets/globalstyles/Scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    flex: 1,
  },
  searchSection: {
    height: '7%',
  },
  searchBarWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 999,
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(8),
    padding: horizontalScale(8),
  },
  searchInput: {
    flex: 1,
    height: verticalScale(25),
    paddingHorizontal: horizontalScale(12),
    color: '#ffffff',
    fontSize: scaleFontsSize(19),
  },
  searchButton: {
    padding: horizontalScale(8),
  },
  locationContainer: {
    position: 'absolute',
    top: '18%',  // Position it below the search bar
    backgroundColor: 'rgb(247, 247, 247)',  // Dark gray background
    marginLeft: horizontalScale(20),
    width: '90%',
    borderRadius: 20,
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(16),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(75, 85, 99, 0.4)',  // Subtle border color
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationTab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(4),
    paddingVertical:verticalScale(10),
  },
  locationText: {
    fontSize: scaleFontsSize(16),
    color: '#000000',
    marginLeft: horizontalScale(12),
  },
  forecastContainer:{  marginTop:verticalScale(20)},
  forecastlocationTextContainer:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  forecastlocationText:{
    fontSize: scaleFontsSize(30),
    color: '#ffffff',
  },
  forecastImageContainer:{
    alignItems:'center',
    justifyContent:'center',
  },
  forecastImage:{
    width:horizontalScale(220),
    height: verticalScale(220),
  },
  DegreesStat:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  DegreeNum:{
    fontSize:scaleFontsSize(40),
    color: '#ffffff',
    fontWeight:'800',
  },
  DegreeText:{
    fontSize:scaleFontsSize(25),
    color: '#ffffff',

  },
  OtherStatsContainer:{
    flexDirection:'row',
    marginHorizontal:horizontalScale(10),
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:verticalScale(30),
  },
  OtherStats:{
    flexDirection:'row',
    gap:horizontalScale(5),
    alignItems:'center',
  },
  OtherStatsText:{
    fontSize:scaleFontsSize(18),
    color: '#ffffff',
    fontWeight:'600',
  },
  DailyForecastContainer:{
    flexDirection:'column',
    marginHorizontal:horizontalScale(10),
    marginTop:verticalScale(20),
  },
  DailyForecastImage:{
    width:horizontalScale(50),
    height: verticalScale(50),
  },
  DailyForecastContent:{
    marginTop:verticalScale(15),
  },
  DailyForecastTab:{
    width:horizontalScale(80),
    height:verticalScale(100),
    borderRadius:20,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginRight:horizontalScale(15),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  DailyForecastDayText:{
    fontSize:scaleFontsSize(18),
    color: '#ffffff',
    fontWeight:'500',
  },
  DailyForecastDegreeText:{
    fontSize:scaleFontsSize(18),
    color: '#ffffff',
    fontWeight:'700',
  },
});

export default styles;