import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import logoGoogle from '../../assets/SignIN-SignUP/google.svg';
import logoFace from '../../assets/SignIN-SignUP/face.svg';
import ilustration2 from '../../assets/SignIN-SignUP/ilustr2.svg';
import TextField from '@mui/material/TextField';

const SignUp = () => {
	const { user, signInWithGoogle } = useAuth();
	const history = useNavigate();

	const [errors, setErrors] = useState(true);
	const [errorsPassword, setErrorsPassword] = useState(true);
	const [errorsValidatePassword, setErrorsValidatePassword] = useState(true);
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const [validatePasswordValue, setValidatePasswordValue] = useState('');

	useEffect(() => {
		emailValue ? setErrors(false) : setErrors(true);
		emailValue.includes('@') ? setErrors(false) : setErrors(true);
		passwordValue ? setErrorsPassword(false) : setErrorsPassword(true);
		validatePasswordValue ? setErrorsValidatePassword(false) : setErrorsValidatePassword(true);
	}, [emailValue, passwordValue, validatePasswordValue]);

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
					<h1>Cadastrar</h1>
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
					<TextField
						sx={{ width: '100%' }}
						required
						error={errors}
						id='filled-email-input'
						label='E-MAIL'
						type='email'
						autoComplete='current-email'
						variant='standard'
						value={emailValue}
						onChange={(e) => setEmailValue(e.target.value)}
					/>

					<TextField
						sx={{ width: '100%' }}
						required
						error={errorsPassword}
						id='filled-password-input'
						label='SENHA'
						type='password'
						autoComplete='current-password'
						variant='standard'
						value={passwordValue}
						onChange={(e) => setPasswordValue(e.target.value)}
					/>

					<TextField
						sx={{ width: '100%' }}
						required
						error={errorsValidatePassword}
						id='filled-password-input'
						label='REPITA A SENHA'
						type='password'
						autoComplete='current-password'
						variant='standard'
						value={validatePasswordValue}
						onChange={(e) => setValidatePasswordValue(e.target.value)}
					/>

					<button>Cadastrar</button>
				</S.Form>
				<p>
					Ao continuar, você concorda com os <strong>Termos de Serviço</strong> da UDOIS e
					confirma que leu a nossa <strong>Política de Privacidade</strong>
				</p>

				<span onClick={handleSignIN}>já é um membro? Entrar</span>
			</div>
		</S.Wrapper>
	);
};

export default SignUp;
