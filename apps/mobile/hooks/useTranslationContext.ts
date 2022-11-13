import * as React from 'react';
import { TranslationContext } from '../contexts/TranslationProvider';

function useTranslationContext() {
  return React.useContext(TranslationContext);
}

export { useTranslationContext };
