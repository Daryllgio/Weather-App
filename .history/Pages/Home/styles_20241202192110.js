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

  },
  searchInput: {
    flex: 1,
    height: verticalScale(25),
    paddingHorizontal: horizontalScale(12),
    color: '#ffffff',
    fontSize: scaleFontsSize(18),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 999,
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(8),
    padding: horizontalScale(8),
  },
  searchButton: {
    padding: horizontalScale(8),
  },
});

export default styles;
