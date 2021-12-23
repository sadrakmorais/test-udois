import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import logoGoogle from '../../assets/SignIN-SignUP/google.svg';
import logoFace from '../../assets/SignIN-SignUP/face.svg';
import ilustration1 from '../../assets/SignIN-SignUP/ilustr1.svg';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignIn = () => {
	const history = useNavigate();

	const { user, signInWithGoogle, signInWithFacebook } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	useEffect(() => {
		if (user) {
			history('/');
		}
	}, [user]);

	const handleRegister = () => {
		history('/cadastrar');
	};

	const handleGoogleAuthentication = async () => {
		if (!user) {
			await signInWithGoogle();
		}
		history('/home');
	};
	const handleFaceAuthentication = async () => {
		if (!user) {
			await signInWithFacebook();
		}
		history('/home');
	};

	return (
		<S.Wrapper>
			<div className='ilustration'>
				<img src={ilustration1} alt='Ilustração1' />
			</div>
			<div className='signin'>
				<S.Authentication>
					<h2>Acessar</h2>
					<div>
						<img
							src={logoGoogle}
							onClick={handleGoogleAuthentication}
							alt='Logo Google'
						/>
						<img src={logoFace} onClick={handleFaceAuthentication} alt='Logo Google' />
					</div>
				</S.Authentication>
				<S.Form>
					<form onSubmit={handleSubmit(onSubmit)} fullWidth>
						<Box mb={2} fullWidth>
							<TextField
								variant='standard'
								label='E-mail'
								fullWidth
								autoComplete='email'
								autoFocus
								{...register('email', {
									required: ' ',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									},
								})}
								error={!!errors?.email}
								helperText={errors?.email ? errors.email.message : null}
							/>

							<TextField
								variant='standard'
								label='Senha'
								fullWidth
								type='password'
								autoFocus
								{...register('password', {
									required: ' ',
									minLength: 6,
									maxLength: 12,
								})}
								error={!!errors?.password}
								helperText={errors?.password ? errors.password.message : null}
							/>

							<h1>Esqueceu sua senha?</h1>
						</Box>
						<Button type='submit' variant='contained' color='success' fullWidth>
							Acessar
						</Button>
					</form>
				</S.Form>
				<span onClick={handleRegister}>Precisa de uma conta? Crie uma conta agora</span>
			</div>
		</S.Wrapper>
	);
};

export default SignIn;
