import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	width: 100%;
	height: 100%;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

	> :nth-child(1) {
		flex-grow: 1;
	}

	@media (max-width: 640px) {
		width: 100%;
		height: calc(100vh - 84px);
	}
`;
