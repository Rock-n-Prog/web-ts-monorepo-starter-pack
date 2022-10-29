import { useContext } from 'react';
import { TranslationContext } from '../contexts/TranslationProvider';

function useTranslationContext() {
  return useContext(TranslationContext);
}

export { useTranslationContext };
