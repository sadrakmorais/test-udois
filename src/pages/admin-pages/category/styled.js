import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	padding: 10px 13%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	section {
		display: flex;
		justify-content: space-between;
		h1 {
			font-size: 2.25em;
			font-weight: 400;
		}

		button {
			background-color: #34a853;
			display: flex;
			align-items: center;
			color: #fff;
			font-size: 0.875em;
			padding: 12px 23px;
		}
	}
`;

export const Grid = styled.div`
	width: 100%;
	height: 700px;
	align-self: center;
`;
