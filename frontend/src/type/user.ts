export interface IUser {
    email: string;
    isActivated: boolean;
    id: string;
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

// Дополнительные типы, если необходимо
export interface AuthError {
    message: string;
}

// Для состояния хранилища
export interface AuthState {
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
    error: string;
}

export enum AuthActionTypes {
    SET_AUTH="SET_AUTH",
    SET_USER="SET_USER",
    SET_LOADING="SET_LOADING",
    SET_AUTH_ERROR="SET_AUTH_ERROR",
    SET_USER_ERROR="SET_USER_ERROR",
    SET_LOADING_ERROR="SET_LOADING_ERROR",
}

interface SetAuthAction {
    type: AuthActionTypes.SET_AUTH;
    payload: boolean;
}

interface SetUserAction {
    type: AuthActionTypes.SET_USER;
    payload: IUser;
}

interface SetLoadingAction {
    type: AuthActionTypes.SET_LOADING;
    payload: boolean;
}
interface SetAuthErrorAction {
    type: AuthActionTypes.SET_AUTH_ERROR;
    payload: string;
}

interface SetUserErrorAction {
    type: AuthActionTypes.SET_USER_ERROR;
    payload: string;
}

interface SetLoadingErrorAction {
    type: AuthActionTypes.SET_LOADING_ERROR;
    payload: string;
}

export type AuthAction =  SetAuthAction | 
    SetUserAction | 
    SetLoadingAction | 
    SetAuthErrorAction |
    SetUserErrorAction |
    SetLoadingErrorAction;