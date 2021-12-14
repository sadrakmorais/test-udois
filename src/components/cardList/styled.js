import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 15px 10px;
	align-items: center;

	@media (min-width: 1500px) {
		justify-content: center;
	}
	@media (max-width: 958px) {
		justify-content: center;
	}
	.layout {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.reverse {
		display: flex;
		flex-direction: column-reverse;
		gap: 10px;
	}
`;
