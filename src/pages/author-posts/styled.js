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
	padding: 40px 1%;
	display: flex;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 15px 10px;
	align-items: flex-start;
	justify-content: flex-start;

	@media (max-width: 450px) {
		padding: 40px 3%;
	}
	@media (min-width: 1500px) {
		justify-content: center;
	}
	@media (max-width: 958px) {
		justify-content: center;
	}
`;
