export interface IRegister {
  email: string;
  password: string;
  ConfPassword: string;
  error: string;
}
export interface IHandleChange {
  (str: string): void;
}
