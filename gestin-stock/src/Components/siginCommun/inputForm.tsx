import React, { ReactNode, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import google from '../../Assets/google.png';
import './inputForm.css';
import { toast } from 'react-toastify';
import supabase from '../../utils/api';

interface MyFormProps {
    children?: ReactNode; 
    nameButton?: string;
}

interface MyFormValues {
    email: string;
    password: string;
}

export const  MyForm: React.FC<MyFormProps> =  ({ children, nameButton }: MyFormProps) => {
    const initialValues: MyFormValues = {
        email: '',
        password: ''
    };

    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = async (values: MyFormValues) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email: values.email,
                password: values.password
            });

            if (error) {
                setError(error.message);
            } else {
                setSuccessMessage('Account created successfully!');
            }
        } catch (error) {
            setError('An error occurred while creating the account.');
        }
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email().required(),
                    password: Yup.string().min(8, 'Password must be at least 8 characters long').required()
                })}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className='inputForm'>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" className='put' placeholder="Entrez votre email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" className='put' placeholder="Create a password" />
                            {errors.password && <p className='erreurMsg'>{errors.password}</p>}
                        </div>
                        <div>{children}</div>
                        <div className='button'>
                            <button className='start' type="submit" >{nameButton}</button>
                            <button className='emailButton'><img src={google} className='google' />Sign up with Google</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
