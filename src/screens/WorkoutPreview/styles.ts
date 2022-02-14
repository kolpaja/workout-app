import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    paddingBottom: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'NotoSerif-bold',
  },
  text: {},
  modalContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sequences: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sequenceItem: {},
  sequenceText: {
    fontSize: 16,
  },
  icon: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default styles;