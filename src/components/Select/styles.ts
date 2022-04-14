import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  inputSelect: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 2,
    borderRadius: 5,
    marginVertical: 2,
    height: 30,
    fontSize: 11,
  },
  select: {
    position: 'absolute',
    padding: 5,
    top: 54,
    backgroundColor: '#fff',
    zIndex: 1000,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    borderRadius: 5,
  },
  option: {
    marginVertical: 2,
  },
  selectOn: {},
  selectOff: {},
});

export default styles;
