const namespaces = ['common', 'forms', 'index', 'hello', 'users'] as const;
type Namespace = typeof namespaces[number];

const defaultNamespace = 'common';

export type { Namespace };
export { namespaces, defaultNamespace };
