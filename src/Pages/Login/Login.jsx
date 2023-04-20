import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { SigninUser, loginGoogle } from '../../Utils/Redux/AuthSlice/AuthSlice';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { handleSubmit, register, reset } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, email } = useSelector(state => state.auth)
    const provider = new GoogleAuthProvider();


    const onSubmit = (data) => {
        dispatch(SigninUser({ email: data.email, password: data.password }))
        reset()
    }
    useEffect(() => {
        if (!isLoading && email) {
            navigate('/')
        }
    }, [email, isLoading, navigate])

    return (
        <div className='h-[500px] flex flex-col justify-center items-center'>
            <h2 className='text-4xl'>Login</h2>
            {/* {isError ? <p className='text-red-500'>{error}</p> : ''} */}
            <div className='w-96'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"{...register("email")} placeholder="Your Email" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"{...register("password")} placeholder="Your Password" className="input input-bordered w-full" />
                    </div>
                    <button type="submit" className='btn btn-accent w-full my-2' >Submit</button>
                </form>
            </div>
            <p>Don't Have an account? <Link to='/signup' className='text-info'>Create now.</Link></p>
            <p>Forget Your Password? <Link to='/reset' className='text-info'>Reset Password</Link></p>

            <button className='btn btn-accent my-2' onClick={() => dispatch(loginGoogle(provider))} >Login With Google</button>
        </div>
    );
};

export default Login;