import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../components/Layout';
import { Navigate } from 'react-router-dom';
import { register } from "../features/user";


const RegisterPage = () => {
	const onSubmit = async (data) => {
		if (!data.first_name || !data.last_name || !data.email || !data.password) {
		  console.error('All fields must be defined');
		  return;
		}
	  
		setFormData(data);
		const payloadUser = {
		  first_name: data.first_name,
		  last_name: data.last_name,
		  email: data.email,
		  password: data.password,
		};
		dispatch(register(payloadUser));
	  };
	const dispatch = useDispatch();
	const registered = useSelector(state => state.user.registered);
	const loading = useSelector(state => state.auth);
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
	});

	const { first_name, last_name, email, password } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	
	if (registered) {
    	return <Navigate to="/" />;
  	};

	return (
		<Layout title='Auth Site | Register' content='Register page'>
			<h1>Register for an Account</h1>
			<form className='mt-5' onSubmit={onSubmit}>
				<div className='form-group'>
					<label className='form-label' htmlFor='first_name'>
						First Name
					</label>
					<input
						id='first_name'
						className='form-control'
						type='text'
						name='first_name'
						onChange={onChange}
						value={first_name}
						required
					/>
				</div>
				<div className='form-group mt-3'>
					<label className='form-label' htmlFor='last_name'>
						Last Name
					</label>
					<input
						id='last_name'
						className='form-control'
						type='text'
						name='last_name'
						onChange={onChange}
						value={last_name}
						required
					/>
				</div>
				<div className='form-group mt-3'>
					<label className='form-label' htmlFor='email'>
						Email
					</label>
					<input
						id='email'
						className='form-control'
						type='email'
						name='email'
						onChange={onChange}
						value={email}
						required
					/>
				</div>
				<div className='form-group mt-3'>
					<label className='form-label' htmlFor='password'>
						Password
					</label>
					<input
						id='password'
						className='form-control'
						type='password'
						name='password'
						onChange={onChange}
						value={password}
						required
					/>
				</div>
				{loading ? (
					<div className="spinner-grow" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				) : (
					<button className='btn btn-primary mt-4'>Register</button>
				)}
			</form>
		</Layout>
	);
};

export default RegisterPage;