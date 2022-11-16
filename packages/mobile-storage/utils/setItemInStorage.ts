import AsyncStorage from '@react-native-async-storage/async-storage';

type SetItemInStorageParams = {
  key: string;
  value: string;
};

function setItemInStorage({ key, value }: SetItemInStorageParams) {
  return AsyncStorage.setItem(key, value).catch(error => console.error('Error setting item in storage', error));
}

export default setItemInStorage;
