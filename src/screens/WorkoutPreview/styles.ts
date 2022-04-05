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
  counterUI: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  countDown: {
    fontSize: 42,
  },
  icon: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  counterItem: {
    flex: 1,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 24,
    alignSelf: 'center',
  },
});

export default styles;
