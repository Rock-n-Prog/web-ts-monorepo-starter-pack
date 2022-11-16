import * as React from 'react';
import { LocaleContext } from '../contexts/LocaleProvider';

function useLocaleContext() {
  return React.useContext(LocaleContext);
}

export { useLocaleContext };
