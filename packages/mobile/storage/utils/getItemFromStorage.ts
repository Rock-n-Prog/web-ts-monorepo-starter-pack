import AsyncStorage from '@react-native-async-storage/async-storage';

type GetItemInStorageParams<T extends string> = {
  readonly key: string;
  readonly initialValue: T;
  readonly callback: (value: T) => unknown;
};

function getItemFromStorage<T extends string>({ key, initialValue, callback }: GetItemInStorageParams<T>) {
  return AsyncStorage.getItem(key)
    .then(value => {
      const foundValue = (value as T) ?? initialValue;
      callback(foundValue);
    })
    .catch(error => console.error('Error getting item from storage', error));
}

export type { GetItemInStorageParams };
export default getItemFromStorage;
