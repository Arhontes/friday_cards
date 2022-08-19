import React from 'react';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import {Profile} from "../features/f2-profile/Profile";
import {Login} from "../features/f1-auth/a1-login/Login";
import {NewPassword} from "../features/f1-auth/a4-newPassword/NewPassword";
import {PasswordRecovery} from "../features/f1-auth/a3-passwordRecovery/PasswordRecovery";

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path={"/*"} element={<Profile />}/>
              <Route path={"/login"} element={ <Login />}/>
              <Route path={"/newPassword"} element={<NewPassword />}/>
              <Route path={"/passwordRecovery"} element={<PasswordRecovery />}/>
              <Route path={"/404"} element={<Navigate to={"/404"}/>}/>
          </Routes>
      </HashRouter>

  );
}

export default App;
