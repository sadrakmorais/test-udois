import React, { useState } from 'react';
import MessagingService from '../../service/messaging';
import * as S from './styled';

const MessageSender = () => {
	const [message, setMessage] = useState('');

	const handleSubmit = () => {
		MessagingService.sendMessage(message);
		setMessage('');
	};

	return (
		<S.Wrapper>
			<input
				type='text'
				value={message}
				placeholder='Insira sua mensagem aqui'
				onChange={(e) => setMessage(e.target.value)}
				onSubmit={handleSubmit}
			/>

			<button onClick={handleSubmit}>Enviar</button>
		</S.Wrapper>
	);
};

export default MessageSender;
