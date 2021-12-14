import React, { useEffect } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import logoGoogle from '../../assets/SignIN-SignUP/google.svg';
import logoFace from '../../assets/SignIN-SignUP/face.svg';
import ilustration2 from '../../assets/SignIN-SignUP/ilustr2.svg';

const SignUp = () => {
	const { user, signInWithGoogle } = useAuth();
	const history = useNavigate();

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
					<input type='text' placeholder='E-mail' />
					<input type='password' placeholder='Senha' />
					<input type='password' placeholder='Repita Senha' />

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
