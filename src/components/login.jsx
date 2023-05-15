// import { auth } from '../firebase_config';
// import { signInWithEmailAndPassword } from 'firebase/auth';

import { useState } from "react";
import Link from "next/link";


function Login(){
    // const navigate = useNavigate()
    const [err,setErr] = useState(false)
    const HandleSubmit= async (e)=>{
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        try{
            // await signInWithEmailAndPassword(auth,email,password)
            // navigate("/Profile")

            console.log(email,password);
            // navigate('/');

        }
        catch(err){
            setErr(true)
        }

    }
    return(
        <div className="FormBox" onSubmit={(e)=>HandleSubmit(e)}>
            <form>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <input type="submit" id="S" className="hover:cursor-pointer"></input>
                {err && <span style={{alignSelf:'center'}}><b>Username or Password is wrong, Try Again!</b></span>}
                <p style={{width:'34%'}}>Do not have an Account?<b><Link style={{marginLeft:'2%',textDecoration:'none'}} href="/register">Register Now</Link></b></p>
            </form>
        </div>
    )   
}

export default Login