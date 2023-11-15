import { AuthAction, AuthActionTypes, AuthState, IUser } from "../../type/user";

const initialState: AuthState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false,
    error: '',
};

export const userReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH:
            return { ...state, isAuth: action.payload, error: "" };
        case AuthActionTypes.SET_USER:
            return { ...state, user: action.payload, error: "" };
        case AuthActionTypes.SET_LOADING:
            return { ...state, isLoading: action.payload, error: "" };
        case AuthActionTypes.SET_USER_ERROR:
        case AuthActionTypes.SET_AUTH_ERROR:
        case AuthActionTypes.SET_LOADING_ERROR:
            return { ...state, error: action.payload }; // Обработка всех действий, связанных с ошибками
        default:
            return state;
    }
};

