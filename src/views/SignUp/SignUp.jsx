import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebaseConfig from '../../firebase/config';

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = e => {
    e.preventDefaul();
    const { email, password } = e.target.elements;
    try{
      firebaseConfig.auth().CreateUserWithEmailAndPassword(email.value, password.value)
      setCurrentUser(true)
    } catch (err){
      alert(err)
    }
  };
  if(currentUser){
    return <Redirect to="/dashboard" />
  }

  return(
    <>
     <h1>Sign Up</h1>
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

export default SignUp;
