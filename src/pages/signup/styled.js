import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	padding: 50px;
	overflow-y: auto;

	.ilustration {
		max-width: 650px;
	}

	@media (max-width: 1025px) {
		flex-direction: column;
		padding: 10px;

		.ilustration {
			max-width: 60%;
		}
	}

	.ilustration {
		img {
			max-width: 100%;
		}
	}
	.signup {
		flex: 3;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h2 {
			font-size: 3em;
			font-weight: 400;
		}

		h1 {
			padding: 0 20%;
			text-align: center;
			font-size: 1.123em;
			color: #b8b5b5;
			margin-top: 50px;
			line-height: 30px;
			strong {
				color: #000;
				cursor: pointer;
			}
			@media (max-width: 450px) {
				padding: 0 5%;
				font-size: 0.95em;
				margin-top: 50px;
				line-height: 20px;
			}
		}

		span {
			margin-top: 30px;
			font-weight: 400;
			font-size: 1.5em;
			cursor: pointer;
		}

		@media (max-width: 1025px) {
			flex: 0;
			width: 100%;
			padding: 0 10%;
			margin-top: 50px;
			gap: 20px;
		}

		@media (max-width: 450px) {
			flex: 0;
			width: 100%;
			margin-top: 20px;
			gap: 10px;

			h2 {
				font-size: 1.5em;
				font-weight: 400;
			}

			span {
				margin-top: 10px;
				padding: 0;
				font-size: 1em;
				cursor: pointer;
			}

			.ilustration {
				max-width: 300px;
			}
		}
	}
`;
export const Authentication = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
	gap: 10px;

	@media (max-width: 1025px) {
		padding: 10px;
	}

	@media (max-width: 450px) {
		padding: 20px;
	}
	h1 {
		font-weight: 400;
		font-size: 3em;
		@media (max-width: 450px) {
			font-size: 1.7em;
		}
	}
	div {
		display: flex;
		gap: 20px;
		img {
			width: 60px;
			height: 60px;
			cursor: pointer;
			@media (max-width: 450px) {
				width: 35px;
				height: 35px;
			}
		}
	}
`;
export const Form = styled.div`
	width: 85%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;
	form {
		width: 100%;
	}

	@media (max-width: 1025px) {
		width: 90%;
	}

	@media (max-width: 450px) {
		width: 90%;
	}
`;
