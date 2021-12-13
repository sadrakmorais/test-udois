import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 15px 10px;
	align-items: flex-start;
	justify-content: space-evenly;

	@media (min-width: 1500px) {
		justify-content: center;
	}
	@media (max-width: 958px) {
		justify-content: center;
	}
`;
