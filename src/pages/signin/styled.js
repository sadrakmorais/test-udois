import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	padding: 50px;
	align-items: center;

	@media (max-width: 770px) {
		flex-direction: column;
		padding: 25px;
		gap: 40px;

		.ilustration {
			max-width: 300px;
		}
	}

	.ilustration {
		flex: 2;
		img {
			max-width: 100%;
		}
	}
	.signin {
		flex: 3;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		span {
			margin-top: 100px;
			padding: 0 20%;

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
			font-size: 2.3em;
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

	p {
		align-self: flex-start;
		font-size: 1.5em;
		cursor: pointer;

		@media (max-width: 450px) {
			font-size: 1em;
		}
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
