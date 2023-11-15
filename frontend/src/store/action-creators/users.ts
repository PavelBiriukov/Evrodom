import axios from 'axios';
import React, { Dispatch } from 'react';
import { API_URL } from '../../http';
import AuthService from '../../services/AuthService';
import { AuthAction, AuthActionTypes, AuthResponse, IUser } from '../../type/user';

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const response = await AuthService.login(email, password);
            console.log(response.data.user);
            localStorage.setItem("token", response.data.accessToken);
            dispatch({type: AuthActionTypes.SET_AUTH, payload: true})
            dispatch({type: AuthActionTypes.SET_USER, payload: response.data.user})
        } catch (error) {
            dispatch({
                type: AuthActionTypes.SET_USER_ERROR,
                payload: 'Произошла ошбка при входе в аккаунт'
            })
        }
    }
}
export const registration = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem("token", response.data.accessToken);
            console.log(response.data.user);
            dispatch({type: AuthActionTypes.SET_AUTH, payload: true})
            dispatch({type: AuthActionTypes.SET_USER, payload: response.data.user})
        } catch (error) {
            dispatch({
                type: AuthActionTypes.SET_USER_ERROR,
                payload: 'Произошла ошибка при регистрации аккаунта'
            });
        }
    };
};

export const logout = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            await AuthService.logout();
            localStorage.removeItem("token");
            dispatch({type: AuthActionTypes.SET_AUTH, payload: false})
            dispatch({type: AuthActionTypes.SET_USER, payload: {} as IUser})
        } catch (error) {
            dispatch({
                type: AuthActionTypes.SET_USER_ERROR,
                payload: 'Произошла ошибка при выходе из аккаунта'
            });
        }
    };
};

export const checkAuth = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.SET_LOADING, payload: true})
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true}) // Предполагается, что в AuthService.checkAuth будет логика проверки аутентификации
            localStorage.setItem("token", response.data.accessToken);
            console.log(response);
            dispatch({type: AuthActionTypes.SET_AUTH, payload: true})

            dispatch({type: AuthActionTypes.SET_USER, payload: response.data.user})
        } catch (error: any) {
            console.log(error.response?.data?.message);
            
            
            localStorage.removeItem("token");
            dispatch({
                type: AuthActionTypes.SET_USER_ERROR,
                payload: 'Произошла ошибка при проверке аутентификации'
            });
        } finally {
            dispatch({type: AuthActionTypes.SET_LOADING, payload: false})
        }
    };
};