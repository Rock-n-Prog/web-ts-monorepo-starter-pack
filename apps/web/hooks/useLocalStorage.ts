import * as React from 'react';

type GetItemFromLocaleStorageParams<T> = {
  readonly key: string;
  readonly initialValue: T;
};

type SetItemInLocaleStorageParams<T> = {
  readonly key: string;
  readonly value: T;
};

type UseLocaleStorageOutput<T> = readonly [T, (value: T) => void];

function getItemFromLocaleStorage<T>({ key, initialValue }: GetItemFromLocaleStorageParams<T>) {
  const item = window?.localStorage.getItem(key);
  return Promise.resolve(item ? (JSON.parse(item) as T) : initialValue);
}

function setItemInLocaleStorage<T>({ key, value }: SetItemInLocaleStorageParams<T>) {
  window?.localStorage.setItem(key, JSON.stringify(value));
  return Promise.resolve();
}

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
