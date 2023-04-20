import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CreateUser } from '../../Utils/Redux/AuthSlice/AuthSlice';

const SignUp = () => {

    const { handleSubmit, register } = useForm();
    const [Error, setError] = useState('')
    const { message } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if (data.password !== data.password2) {
            setError("Password Didn't Match")
        } else {
            setError("")
            dispatch(CreateUser({ name: data.name, email: data.email, password: data.password }))
        }
    }
    return (
        <div className='min-h-screen  flex flex-col justify-center items-center mx-5'>
            <h2 className='text-4xl'>SignUp</h2>
            {Error && <p className='text-red-500'>{Error}</p>}
            {message && <p className='text-red-500'>{message}</p>}
            <div className='w-96'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"{...register("name")} placeholder="Your Name" className="input input-bordered w-full " />
                    </div>
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
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Re-Type Password</span>
                        </label>
                        <input type="password"{...register("password2")} placeholder="Re-type Your Password" className="input input-bordered w-full" />
                    </div>
                    <button type="submit" className='btn btn-accent w-full my-2' >Submit</button>
                </form>
            </div>
            <p>Already Have an account? <Link to='/login' className='text-info'>Login now.</Link></p>

        </div>
    );
};

export default SignUp;