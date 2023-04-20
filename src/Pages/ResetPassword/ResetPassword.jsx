import React from 'react';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='h-[300px] flex flex-col justify-center items-center'>
            <h2 className='text-4xl'>Reset Your Password</h2>
            {/* {message ? <p className='text-secondary'>{message}</p> : ''} */}
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