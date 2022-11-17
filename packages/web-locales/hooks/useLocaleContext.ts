import { useContext } from 'react';
import { LocaleContext } from '../contexts/LocaleProvider';

function useLocaleContext() {
  return useContext(LocaleContext);
}

export { useLocaleContext };
