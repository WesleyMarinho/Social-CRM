export type Role = 'OWNER' | 'ADMIN' | 'AGENT' | 'VIEWER';

export function hasRole(userRoles: Role[], required: Role): boolean {
  return userRoles.includes(required);
}
