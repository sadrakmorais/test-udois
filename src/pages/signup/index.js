import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import logoGoogle from '../../assets/SignIN-SignUP/google.svg';
import logoFace from '../../assets/SignIN-SignUP/face.svg';
import ilustration2 from '../../assets/SignIN-SignUP/ilustr2.svg';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignUp = () => {
	const { user, signInWithGoogle } = useAuth();
	const history = useNavigate();

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

	const handleSignIN = () => {
		history('/login');
	};

	const handleGoogleAuthentication = async () => {
		if (!user) {
			await signInWithGoogle();
		}
		history('/home');
	};
	const handleFaceAuthentication = () => {
		alert('Authentication Face');
	};
	return (
		<S.Wrapper>
			<div className='ilustration'>
				<img src={ilustration2} alt='Ilustração1' />
			</div>
			<div className='signup'>
				<S.Authentication>
					<h2>Cadastrar</h2>
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
						<Box mb={1} fullWidth>
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
							<TextField
								variant='standard'
								label='Confirme sua Senha'
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
						</Box>
						<Button type='submit' variant='contained' color='success' fullWidth>
							Cadastrar
						</Button>
					</form>
				</S.Form>
				<h1>
					Ao continuar, você concorda com os <strong>Termos de Serviço</strong> da UDOIS e
					confirma que leu a nossa <strong>Política de Privacidade</strong>
				</h1>

				<span onClick={handleSignIN}>já é um membro? Entrar</span>
			</div>
		</S.Wrapper>
	);
};

export default SignUp;
