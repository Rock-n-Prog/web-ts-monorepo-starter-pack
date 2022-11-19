type SetItemInLocaleStorageParams<T> = {
  readonly key: string;
  readonly value: T;
};

function setItemInLocaleStorage<T>({ key, value }: SetItemInLocaleStorageParams<T>) {
  window?.localStorage.setItem(key, JSON.stringify(value));
  return Promise.resolve();
}

export default setItemInLocaleStorage;
