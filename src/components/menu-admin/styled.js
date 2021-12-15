import styled from 'styled-components';

export const WrapperUser = styled.div`
	display: flex;
	flex-direction: column;
	padding: 18px;
	font-family: 'Roboto', sans-serif;
	gap: 5px;

	h1 {
		font-weight: bold;
		font-size: 0.9em;
	}
	p {
		font-size: 0.85em;
	}
`;

export const WrapperList = styled.ul`
	display: flex;
	flex-direction: column;
	width: 250px;
	li {
		display: flex;
		align-items: center;
		font-size: 1.2em;
		gap: 5px;
		padding: 15px;

		&:hover {
			background: #cbb;
			transition: 0.3s all ease;
		}
	}
`;
