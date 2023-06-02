import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../firebase/Auth/Auth';
import firebaseConfig from '../../firebase/config';

const LogIn = () =>{
  const handleSubmit = (e) =>{
    e.preventDefaul();
    const { email, password } = e.target.elements;
    try{
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (err){
      console.error(err)
    }
  };
  const {currentUser} = useContext(AuthContext)
  if(currentUser){
    return <Redirect to="/dashboard" />
  }
  return (
    <>
     <h1>Log In</h1>
     <form onSubmit={handleSubmit}>
       <label for="email">Email</label>
       <input type="email" name="email" placeholder="Email" />
       <label for="password">Password</label>
       <input type="password" name="password" placeholder="Password" />
       <button type="submit">Submit</button>
     </form>
   </>
  )
}

export default LogIn;
