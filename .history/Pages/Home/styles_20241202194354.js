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
  locationContainer:{
    backgroundColor:'#ffffff',
    width: horizontalScale(100),
  },
  locationTab:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  locationText:{
    fontSize: scaleFontsSize(17),
    fontFamily: getFontScale('Inter', '600'),
  },
});

export default styles;
