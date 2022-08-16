import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import { signInWithRedirect , GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

import { auth } from '../firebase'



const Login = () => {
    
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // const auth = getAuth();
    
    


    return (
        <div className='grid place-content-center bg-gradient-to-r from-cyan-300 to-blue-700 absolute inset-0'>
            <div className='relative bg-white rounded-3xl p-10 grid grid-cols-1 content-center'>
                <h2 className='p-3 justify-center font-black'>Welcome to TextVerse!</h2>
                <br />
                <div className="bg-[#4285f4] p-5 text-white cursor-pointer  rounded-lg " onClick={() => signInWithRedirect(auth, googleProvider)}>
                    <GoogleOutlined /> Sign In with Google!

                </div>

                <br />
               

                <div className="bg-[#3b5998] p-5 text-white cursor-pointer  rounded-lg" onClick={() => signInWithRedirect(auth, facebookProvider)} >
                    <FacebookOutlined /> Sign In with Facebook!

                </div>
            </div>


        </div>
    )
}

export default Login
