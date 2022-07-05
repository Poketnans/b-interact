export interface RegisterUserData {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  passwordTwo?: string;
  zip_code: string;
  street: string;
  city: string;
  state: string;
}

export interface IAddress {
  city?: string;
  state?: string;
}

export type ArrayResp = Array<[keyof RegisterUserData, string]>;
