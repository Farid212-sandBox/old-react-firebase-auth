import React, { useState, useEffect } from 'react';
import firebaseConfig from '../../firebase/config';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) =>{
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(()=>{
    firebaseConfig.auth().onAuthStateChanged(user=>{
      setCurrentUser(user);
      setLoading(false);
    })
  }, []);
  if (loading){
    return <p> loading... </p>;
  }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
