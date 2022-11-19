const severities = ['info', 'success', 'warning', 'error'] as const;
type Severity = typeof severities[number];

export type { Severity };
export { severities };
