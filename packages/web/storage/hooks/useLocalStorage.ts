import * as React from 'react';
import type { GetItemFromLocaleStorageParams } from '../utils/getItemFromLocalStorage';
import getItemFromLocaleStorage from '../utils/getItemFromLocalStorage';
import setItemInLocaleStorage from '../utils/setItemInLocalStorage';

type UseLocaleStorageOutput<T> = readonly [T, (value: T) => void];

// Defining a return type because type inference is rough here
function useLocalStorage<T>({ key, initialValue }: GetItemFromLocaleStorageParams<T>): UseLocaleStorageOutput<T> {
  const [storedValue, setStoredValue] = React.useState(initialValue);

  React.useEffect(() => {
    getItemFromLocaleStorage({ key, initialValue })
      .then(value => setStoredValue(value))
      .catch((error: Error) => {
        console.error(error);
      });
  }, [key, initialValue]);

  function setStateValue(value: T) {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    return Promise.resolve();
  }

  function setValue(value: T) {
    setStateValue(value)
      .then(() => setItemInLocaleStorage({ key, value }))
      .catch(console.error);
  }

  return [storedValue, setValue];
}

export { useLocalStorage };
