export interface ISTSTokenManager {
  refreshToken: string,
  accessToken: string,
  expirationTime: number
};

export default interface IUser {
  accessToken?: string,
  displayname?: string,
  username: string,
  email?: string,
  emailVerified?: boolean,
  phoneNumber?: string,
  apiKey?: string,
  appName?: string,
  createdAt?: string,
  isAnonymous?: boolean, 
  lastLoginAt?: string,
  providerData?: Array<any>,
  stsTokenManager?: ISTSTokenManager,
  uid?: string
  roles?: Array<string>
}