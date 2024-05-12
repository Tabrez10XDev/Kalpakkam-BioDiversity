import React from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useState } from "react"
import { auth } from "../../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth';


const Verification = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


    const onSubmit = async (e) => {
        e.preventDefault()
        setPersistence(auth, browserSessionPersistence).then(() => {
            return signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/admin/Dashboard")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });

        })

    }


    return (
        <div style={{
            width: "100%", height: "100vh",
            backgroundImage: "url(/Admin-bg.jpg)",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            display: 'flex', flexWrap: 'wrap',

        }}>

            <div className="verify-container" style={{ backgroundColor: 'white', height: '60vh', width: '54vh', borderRadius: 20 }}>

                <div style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <p style={{ fontSize: 24, fontWeight: 600, color: '#252525', marginTop: 54, textAlign: 'center' }}> Welcome Admin</p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <TextField id="outlined-search" value={email} onChange={(e) => setEmail(e.target.value)} label="E-mail" style={{ color: '#252525', backgroundColor: '#ffff', width: 240 }} />
                        <TextField id="outlined-search" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" style={{ color: '#252525', backgroundColor: '#ffff', width: 240, marginTop: 20 }} />

                        <Button variant="contained" onClick={onSubmit} style={{ background: '#252525', borderRadius: 6, height: 45, width: 100, marginTop: 45 }}>Sign in</Button>


                    </div>



                </div>

            </div>


        </div>
    )
}

export default Verification;