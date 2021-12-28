import React, { useEffect, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import * as S from './styled';

const Messages = ({ messages }) => {
	const { user } = useAuth();
	const ref = useRef(null);

	useEffect(() => {
		ref.current.scrollTop = ref.current.scrollHeight;
	}, [messages]);

	return (
		<S.Wrapper ref={ref}>
			{messages.map((message) => {
				const messageClass = message.user.uid === user.id ? 'outgoing' : 'incoming';
				console.log(message.user.uid, user.uid);
				return (
					<div key={message.key} className={`Message ${messageClass}`}>
						<div className={messageClass}>
							<img src={message.user.photo} alt={message.user.displayName} />

							<span>{message.message}</span>
						</div>
					</div>
				);
			})}
		</S.Wrapper>
	);
};

export default Messages;
