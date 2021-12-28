import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	grid-gap: 8px;
	padding: 16px;
	input {
		flex-grow: 1;
		border-radius: 0;
		border: none;
		border-bottom: 1px solid #eeeeee;
		transition: 0.25s ease;
		outline: none;
		padding: 8px;

		color: #1e94d2;

		&:hover,
		&:focus {
			border-color: #c2c2c2;
		}
	}

	button {
		background-color: #1e94d2;
		color: #ffffff;

		border: none;

		text-transform: uppercase;
		letter-spacing: 0.75px;
		font-size: 12px;

		padding: 0 16px;
	}
`;
