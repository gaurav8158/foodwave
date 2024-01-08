import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../Redux/userSlice';
import { useEffect } from 'react';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.user.isLogin)
    const validateYupSchema = Yup.object({
        email: Yup.string().required("email is required"),
        password: Yup.string().required("password is required"),

    })
    const initialValues = {
        email: "",
        password: "",
    }
    useEffect(() => {
        if (isLogin) {
            navigate("/")
        }
    }, [dispatch, isLogin])
    const handleLogin = (values, { resetForm }) => {
        console.log(values);

        dispatch(setLogin(values))

        resetForm();
    }
    return (
        <div className='w-full gap-32 flex justify-center mt-20 mb-20 '>
            <div className='ml-10 mr-10 max-w-md'>
                <div className='flex justify-between '>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-3xl'>Login</h1>
                        <span className='font-semibold'>or
                            <Link onClick={() => { navigate("/signup") }}><span className='text-amber-600'> create an account</span></Link>
                        </span>
                    </div>
                    <div className='flex justify-end items-center'><img className="p-1 w-1/3" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" /></div>
                </div>
                <Formik initialValues={initialValues}
                    validationSchema={validateYupSchema}
                    onSubmit={handleLogin}
                >
                    <Form type="submit" >
                        <div className='flex flex-col'>
                            <Field name="email" type="email"
                                placeholder="Enter your email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2 "
                            />

                            <div className='text-red-600'> <ErrorMessage name="email" /></div>
                        </div>
                        <div className='flex flex-col'>
                            <Field name="password" type="password"
                                placeholder="Enter your password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2 mt-3"
                            />

                            <div className='text-red-600'> <ErrorMessage name="password" /></div>
                        </div>

                        <button type="submit" className='bg-orange-600 w-full p-3 mt-3 text-white font-bold'>LogIn</button>
                        <br />
                        <span className='text-xs font-semibold'>*By clicking on Login, I accept the Terms & Conditions & Privacy Policy</span>
                    </Form>
                </Formik>
            </div>

        </div>

    )
}

export default Login