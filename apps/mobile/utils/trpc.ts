import { createTRPCReact } from '@trpc/react';
import Constants from 'expo-constants';
import type { AppRouter } from 'trpc';

const trpc = createTRPCReact<AppRouter>();

const defaultPort = 3000;

function getVercelUrl() {
  return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
}

function getDebuggerHostUrl() {
  const debuggerHostUrl = Constants.manifest?.debuggerHost
    ? Constants.manifest.debuggerHost
        .split(':')
        .shift()
        ?.concat(`:${process.env.PORT ?? defaultPort}`)
    : undefined;

  return debuggerHostUrl ? `http://${debuggerHostUrl}` : undefined;
}

function getLocalhostUrl() {
  return `http://localhost:${process.env.PORT ?? defaultPort}`;
}

function getBaseUrl() {
  return getVercelUrl() ?? getDebuggerHostUrl() ?? getLocalhostUrl();
}

export { trpc, getBaseUrl };