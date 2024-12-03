import { StyleSheet } from 'react-native';

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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 999,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 12,
    color: '#fff',
    fontSize: 16,
  },
  searchButton: {
    padding: 8,
  },
});

export default styles;
