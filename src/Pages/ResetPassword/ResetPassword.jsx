import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { ResetPass } from '../../Utils/Redux/AuthSlice/AuthSlice';

const ResetPassword = () => {
    const { register, handleSubmit, reset } = useForm();

    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(ResetPass({ email: data.email }))
        reset()
        toast.success("An Email sent for Reset Password")
    }
    return (
        <div className='min-h-screen  flex flex-col justify-center items-center'>
            <h2 className='text-4xl'>Reset Your Password</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-4">
                        <input type="email"{...register("email")} placeholder="Your Email" className="input input-bordered w-full " />
                    </div>
                    <button type='submit' className='w-full btn btn-accent'>Reset</button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;