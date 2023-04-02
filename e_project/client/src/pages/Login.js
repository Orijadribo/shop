import React from 'react'
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../redux/bazarSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(
                    addUser({
                        _id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        image: user.photoURL,
                    })
                );
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                //Sign out sucessfull
                toast.success('Logged Out Successfully!');
                dispatch(removeUser());
            })
            .catch((error) => {
                console.log(error)
            })
    };

    return (
        <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
            <div className='w-full flex items-center justify-center gap-10'>
                <div onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-400 cursor-pointer duration-300'>
                    <img
                        className='w-8'
                        src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png'
                        alt='googleIcon'
                    />
                    <span className='text-sm text-gray-900'>Sign in with Google</span>
                </div>
                <button
                    onClick={handleSignOut}
                    className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray duration-300'>Sign Out</button>
            </div>
            <div className='w-full flex items-center justify-center gap-10'>
                <div className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-400 cursor-pointer duration-300'>
                    <img
                        className='w-8'
                        src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-1024.png'
                        alt='googleIcon'
                    />
                    <span className='text-sm text-gray-900'>Sign in with GitHub</span>
                </div>
                <button className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray duration-300'>Sign Out</button>
            </div>
            <ToastContainer
                position='top-left'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </div>
    );
};

export default Login