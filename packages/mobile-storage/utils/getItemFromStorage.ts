import AsyncStorage from '@react-native-async-storage/async-storage';

type GetItemInStorageParams = {
  key: string;
  initialValue?: string;
  callback?: (value: string) => unknown;
};

function getItemFromStorage({ key, initialValue, callback }: GetItemInStorageParams) {
  return AsyncStorage.getItem(key)
    .then(value => {
      const foundValue = value ?? initialValue;
      return callback ? callback(foundValue) : foundValue;
    })
    .catch(error => console.error('Error getting item from storage', error));
}

export default getItemFromStorage;
