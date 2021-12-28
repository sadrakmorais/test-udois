import React from 'react';
import MessageSender from '../messages-sender';
import Messages from '../messages';
import useMessages from '../../hooks/useMessages';
import * as S from './styled';

const Chat = () => {
	const { messages } = useMessages();

	return (
		<S.Wrapper>
			<Messages messages={messages} />
			<MessageSender />
		</S.Wrapper>
	);
};

export default Chat;
