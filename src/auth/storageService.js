import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async value => {
  try {
    await AsyncStorage.setItem('@storage_Key', value);
  } catch (e) {
    // saving error
    console.log('error');
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

const removeItem = async () => {
  try {
    await AsyncStorage.removeItem('@storage_Key');
  } catch (e) {
    // error reading value
    console.log(e);
  }
};
const storageService = {
  getData,
  storeData,
  removeItem,
};

export default storageService;
