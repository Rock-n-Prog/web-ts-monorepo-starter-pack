const namespaces = ['common', 'index', 'hello', 'users'] as const;
type Namespace = typeof namespaces[number];

export type { Namespace };
