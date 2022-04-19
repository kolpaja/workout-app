import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 2,
    flex: 1,
  },
  title: {
    fontSize: 20,
    paddingBottom: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'NotoSerif-bold',
  },
  noWorkoutsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: 20,
  },
  noWorkouts: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    color: '#000',
  },
});

export default styles;
