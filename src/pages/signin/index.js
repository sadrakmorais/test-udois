import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import logoGoogle from '../../assets/SignIN-SignUP/google.svg';
import logoFace from '../../assets/SignIN-SignUP/face.svg';
import ilustration1 from '../../assets/SignIN-SignUP/ilustr1.svg';
import { useAuth } from '../../hooks/useAuth';
import TextField from '@mui/material/TextField';

const SignIn = () => {
	const history = useNavigate();

	const { user, signInWithGoogle, signInWithFacebook } = useAuth();
	const [errors, setErrors] = useState(false);
	const [errorsPassword, setErrorsPassword] = useState(false);
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');

	const handleErros = () => {
		emailValue ? setErrors(false) : setErrors(true);
		emailValue.includes('@') ? setErrors(false) : setErrors(true);
		passwordValue ? setErrorsPassword(false) : setErrorsPassword(true);
	};
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
					<h1>Acessar</h1>
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

					<p>Esqueceu sua senha?</p>

					<button onClick={handleErros}>Acessar</button>
				</S.Form>
				<span onClick={handleRegister}>Precisa de uma conta? Crie uma conta agora</span>
			</div>
		</S.Wrapper>
	);
};

export default SignIn;
