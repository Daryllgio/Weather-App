import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, scaleFontsSize } from '../../assets/globalstyles/Scaling';
import { getFontScale } from 'react-native-device-info';

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
  forecastlocationText:{
    fontSize: scaleFontsSize(40),
    color: '#ffffff',
    marginLeft: horizontalScale(12),
  },
});

export default styles;
