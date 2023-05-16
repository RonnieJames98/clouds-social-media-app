import React, { useEffect}  from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';


import Login from './components/Login';
import Home from './container/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { fetchUser } from './utils/fetchUser';

function App(){
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();

    if (!user) navigate('/login');
  },[])

  return (
    <GoogleOAuthProvider clientId="1078745229419-9sphtj3tkfr70ssemhoc54g9v0lesdpm.apps.googleusercontent.com">
      <Routes>
        <Route path="login" element={<Login />}/>
        <Route path="/*" element={<Home />}/>

      </Routes>
    </GoogleOAuthProvider>
  )
}

export default App;