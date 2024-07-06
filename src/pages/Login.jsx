import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {login} from '../store/reducers/appSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue } = useForm();

  const handleSubmittedData = (data) => {
    const { email, password } = data;
    if(email.trim() === '') {
      toast.error("Email required")
      return;
    }
    if(password.trim() === '') {
      toast.error("Password required")
      return;
    }
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
      toast.error("Invalid email")
      return;
    }
    if (email !== "test@gmail.com" || password !== "admin123") {
      toast.error("Incorrect Email or Password")
      return;
    }
    dispatch(login());
    toast.success("Logged in successfully!")
    reset();
    navigate(-1);
  }

  const insertTestCreds = () => {
    setValue('email', 'test@gmail.com');
    setValue('password', 'admin123');
  }

  return (
    <div className='min-h-[80vh] dark:bg-stone-900 dark:text-white'>
      <div className='flex items-center justify-center min-h-[80vh]'>
        <form onSubmit={handleSubmit(handleSubmittedData)} className='min-w-72 p-4 shadow-xl rounded-xl bg-slate-50 flex flex-col gap-2'>
          <input {...register('email')} type='text' className='border border-slate-300 rounded-md w-full outline-0 px-4 py-2 dark:text-black' placeholder='email' />
          <input {...register('password')} type='password' className='border border-slate-300 rounded-md w-full outline-0 px-4 py-2 dark:text-black' placeholder='password' />
          <input type='submit' value='Login' className='bg-[#FF0000] py-2 px-4 text-white rounded-md hover:bg-[#ff3300] cursor-pointer w-fit mt-4' />
          <p onClick={insertTestCreds} className='underline cursor-pointer font-semibold dark:text-black'>Use test credentials</p>
        </form>
      </div>
    </div>
  )
}

export default Login