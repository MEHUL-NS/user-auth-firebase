import { onAuthStateChanged } from "firebase/auth";
import React , {useEffect}from "react";
import {  useNavigate } from "react-router-dom";
import { signInWithGoogle , auth} from "../Firebase/firebase.js";

const Home = () =>{ 
  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth , (user)=>{
      if(user) {        
        navigate(`/user/${user.uid}`)}      
    })
  }) 

  async function login(){
    await signInWithGoogle()
  } 
 
  
 
    return(      
    <div className="App">  
    <div>          
      <button onClick={login}>Sign In with Google</button>  
    </div>

    <div>
      <button onClick={()=>{navigate('/phoneAuth')}}>Sign In With Phone Number</button>
    </div>     

    </div>   
   )
}


export default Home
