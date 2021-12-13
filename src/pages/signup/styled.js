import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	padding: 50px;
	align-items: center;

	@media (max-width: 450px) {
		flex-direction: column;
	}
	.ilustration {
		flex: 2;
		img {
			max-width: 100%;
			@media (max-width: 450px) {
				max-width: 300px;
			}
		}
	}
	.signup {
		flex: 3;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		p {
			padding: 0 20%;
			text-align: center;
			font-size: 1.123em;
			color: #b8b5b5;
			margin-top: 80px;
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
			margin-top: 50px;
			font-size: 1.5em;
			cursor: pointer;
		}

		@media (max-width: 450px) {
			gap: 20px;

			span {
				margin-top: 20px;
				padding: 0 5%;
				font-size: 1em;
				cursor: pointer;
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
	h1 {
		font-weight: 400;
		font-size: 3em;
		@media (max-width: 450px) {
			font-size: 2em;
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
				width: 40px;
				height: 40px;
			}
		}
	}
`;
export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 20%;
	gap: 30px;

	@media (max-width: 450px) {
		padding: 0 5%;
		gap: 20px;
	}

	input {
		width: 100%;
		border: transparent;
		border-bottom: 2px solid #595959;
		padding: 10px 0;
		font-size: 1.5em;
		color: #a3a3a3;
		@media (max-width: 450px) {
			font-size: 1em;
			padding: 8px 0;
		}
	}

	button {
		background: #34a853;
		width: 100%;
		padding: 16.5px;
		font-size: 1.5em;
		color: #fff;
		border-radius: 5px;
		cursor: pointer;
		@media (max-width: 450px) {
			font-size: 1em;
			padding: 12.5px;
		}
	}
`;
