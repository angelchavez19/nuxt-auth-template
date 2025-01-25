export interface UserI {
  id: number;
  username: null;
  firstName: string;
  lastName: string;
  profileImage: null;
  email: string;
  provider: null;
  createdAt: Date;
  dateOfBirth: null;
  role: Role;
  isActive: boolean;
  isSuperAdmin: boolean;
  lastLogin: null;
  updatedAt: Date;
  language: null;
  theme: null;
  twoFactorEnabled: boolean;
}

export interface Role {
  name: string;
  permissions: PermissionElement[];
}

export interface PermissionElement {
  permission: PermissionPermission;
}

export interface PermissionPermission {
  name: string;
  route: string;
}

export interface UserForAdminI {
  id: number;
  username: null;
  firstName: string;
  lastName: null | string;
  email: string;
  createdAt: Date;
  dateOfBirth: null;
  role: string;
  isActive: boolean;
  isEmailVerified: boolean;
  lastLogin: null;
  updatedAt: Date;
}
