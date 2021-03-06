import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 8px;
	grid-gap: 8px;
	overflow: auto;

	.Message {
		display: flex;
		animation: pop 0.25s ease;

		@keyframes pop {
			from {
				transform: scale(0);
			}

			to {
				transform: scale(1);
			}
		}

		&.outgoing {
			justify-content: flex-end;
		}

		.outgoing,
		.incoming {
			display: flex;
			grid-gap: 8px;

			span {
				padding: 8px;
				font-size: 18px;
				border-radius: 7px;
				box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
			}
		}

		.outgoing {
			flex-direction: row-reverse;

			span {
				background-color: #1e94d2;
				color: #ffffff;
			}
		}

		.incoming {
			span {
				background-color: #ffffff;
				color: #1e94d2;
			}
		}

		img {
			width: 32px;
			height: 32px;
			border-radius: 16px;
		}
	}
`;
