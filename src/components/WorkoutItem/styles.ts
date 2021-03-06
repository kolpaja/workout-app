import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d6d7da',
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  duration: { fontSize: 15 },
  difficulty: { fontSize: 15 },
  childrenContainer: {
    marginVertical: 10,
  },
  deleteBtn: {
    alignSelf: 'flex-end',
  },
});

export default styles;
