import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import {Profile} from "../features/f2-profile/Profile";
import {Login} from "../features/f1-auth/a1-login/Login";
import {NewPassword} from "../features/f1-auth/a4-newPassword/NewPassword";
import {PasswordRecovery} from "../features/f1-auth/a3-passwordRecovery/PasswordRecovery";
import {Registration} from "../features/f1-auth/a2-registration/Registration";
import {Error404} from "../features/f3-error/Error404";

function App() {
  return (
      <Routes>
        <Route path={"/"} element={<Profile />}/>
        <Route path={"login"} element={ <Login />}/>
        <Route path={"registration"} element={ <Registration />}/>
        <Route path={"/newPassword"} element={<NewPassword />}/>
        <Route path={"/passwordRecovery"} element={<PasswordRecovery />}/>
        <Route path={"/404"} element={<Error404 />}/>
      </Routes>
  );
}

export default App;
