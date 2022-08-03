export interface BasicResult {
  code: number;
  flag: boolean;
  msg: string;
  info: any;
}

export interface LoginResult {
  code: number;
  flag: boolean;
  msg: string;
  token: string;
  expire: number;
}
