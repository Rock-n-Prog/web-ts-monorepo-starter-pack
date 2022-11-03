import * as React from 'react';
import { Alert, AlertProps } from "./Alert";

// TODO: Handle duration?
function Snackbar(props: AlertProps) {
  return <Alert {...props} />;
}

export { Snackbar };