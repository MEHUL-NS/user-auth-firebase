import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {auth} from '../Firebase/firebase.js'


const User = () =>{    
    const {id} = useParams()
    const navigate = useNavigate();
    const logout = async() =>{
        await signOut(auth);
        navigate('/')
    }
    
    
    return(
        <div>            
            <h4>Welcome {id}</h4>    
            <button onClick={logout}>Sign Out</button>       
        </div>
    )
}

export default User;

