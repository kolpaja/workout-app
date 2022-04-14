import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    alignSelf: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  inputWrapper: {
    margin: 5,
    flex: 1,
  },
  label: {},
  input: {
    marginVertical: 2,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: '#ccc',
    height: 30,
    fontSize: 11,
  },
  button: {
    backgroundColor: '#1890ff',
    padding: 5,
    borderRadius: 5,
    width: 80,
    marginVertical: 2,
    zIndex: 1,
  },
  buttonText: {
    alignSelf: 'center',
  },
  select: {},
  row: {
    flexDirection: 'row',
  },
});

export default styles;
