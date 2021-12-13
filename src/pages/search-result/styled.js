import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	padding: 50px 3%;
	display: flex;
	flex-direction: column;
	gap: 30px;

	@media (max-width: 450px) {
		padding: 10px 3%;
	}

	h1 {
		font-style: italic;
		font-size: 400;
		font-size: 2.25em;
	}
	p {
		font-size: 1.5em;
		font-weight: 100;
	}
`;
