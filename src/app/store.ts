import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {loginReducer} from "../features/f1-auth/a1-login/login-reducer";
import {registrationReducer} from "../features/f1-auth/a2-registration/registration-reducer";
import {passwordRecoveryReducer} from "../features/f1-auth/a3-passwordRecovery/passwordRecovery-reducer";
import {newPasswordReducer} from "../features/f1-auth/a4-newPassword/newPassword-reducer";
import {profileReducer} from "../features/f2-profile/profile-reducer";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    passwordRecovery: passwordRecoveryReducer,
    newPassword:newPasswordReducer,
    profile:profileReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>