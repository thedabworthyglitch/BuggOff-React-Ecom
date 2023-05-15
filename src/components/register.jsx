// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
// import { auth } from "../../firebase_config"
// import { storage } from "../../firebase_config";
// import { getDownloadURL } from "firebase/storage";
import {Link} from "next/link";
// import ProfilePicIcon from "../../public/images/user.png"
// import { db } from "../../firebase_config";
// import { doc, setDoc } from "firebase/firestore"; 


function Register(){
    // const navigate = useNavigate()
    const [err,setErr] = useState(false);
    const HandleSubmit= async (e)=>{
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const number = e.target[2].value
        const password = e.target[3].value
        const DP = e.target[4].files[0]
        const storageid = new Date().getTime()

        try {
            console.log(displayName,email,number,password,DP,storageid);
        } catch (err) {
            setErr(true)
        }
    }
    return(
        <div className="FormBox" onSubmit={(e)=>HandleSubmit(e)}>
            <form>
                <input type="text" placeholder="Name" required></input>
                <input type="email" placeholder="Email-ID" required></input>
                <input type="number" placeholder="Mobile Number" required></input>
                <input type="password" placeholder="Password" required></input>
                <label htmlFor="Fl">
                    <img src="user.png" style={{height:'50px',alignSelf:'center'}}/>
                    <p className="bg-gray-200" style={{marginLeft:'5%'}}>Add Profile Photo</p>
                </label>
                <input id="Fl" type="file" placeholder="file" style={{display:'none'}} required></input>
                <input type="submit" id="S" value="Register" className="hover:cursor-pointer"></input>
                {err && <span style={{alignSelf:'center'}}>Something went wrong, Try Again</span>}
                {/* <p style={{width:'26%'}}>Have an Account? <b><Link style={{marginLeft:'2%',textDecoration:'none'}} href="/login">Login Now</Link></b></p> */}
            </form>
        </div>
    )
}

export default Register