import React from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

import logoGoogle from '../../assets/SignIN-SignUP/google.svg';
import logoFace from '../../assets/SignIN-SignUP/face.svg';
import ilustration1 from '../../assets/SignIN-SignUP/ilustr1.svg';
import { useAuth } from '../../hooks/useAuth';

const SignIn = () => {
	const history = useNavigate();

	const { user, signInWithGoogle } = useAuth();

	const handleRegister = () => {
		history('/cadastrar');
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
					<input type='text' placeholder='E-mail' />
					<input type='password' placeholder='Senha' />

					<p>Esqueceu sua senha?</p>

					<button>Acessar</button>
				</S.Form>
				<span onClick={handleRegister}>Precisa de uma conta? Crie uma conta agora</span>
			</div>
		</S.Wrapper>
	);
};

export default SignIn;
