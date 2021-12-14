import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

export const Setting = styled.div`
	padding: 50px 3% 0 3%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		display: flex;
		gap: 16px;
	}

	button {
		background: #34a853;
		color: #fff;
		font-size: 1.5em;
		padding: 15px 21px;
		@media (max-width: 450px) {
			padding: 10px 16px;
			font-size: 1.2em;
		}
	}
`;

export const CardsContainer = styled.div`
	padding: 0 1%;
`;
