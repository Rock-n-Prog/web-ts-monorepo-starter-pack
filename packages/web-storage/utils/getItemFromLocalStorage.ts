type GetItemFromLocaleStorageParams<T> = {
  readonly key: string;
  readonly initialValue: T;
};

function getItemFromLocaleStorage<T>({ key, initialValue }: GetItemFromLocaleStorageParams<T>) {
  const item = window?.localStorage.getItem(key);
  return Promise.resolve(item ? (JSON.parse(item) as T) : initialValue);
}

export type { GetItemFromLocaleStorageParams };
export default getItemFromLocaleStorage;
