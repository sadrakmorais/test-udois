import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	padding: 10px 3%;
	flex-direction: column;
	gap: 20px;
`;
export const WrapperIntro = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;

	@media (max-width: 500px) {
		flex-direction: column;
	}
`;

export const WrapperInfos = styled.div`
	display: flex;
	flex-direction: column;
	padding: 30px 0;
	gap: 10px;
	h1 {
		font-size: 4em;
	}
	h2 {
		font-size: 3em;
		font-weight: normal;
		width: 70%;
	}

	@media (max-width: 500px) {
		h1 {
			font-size: 1.5em;
			font-family: 'Comfortaa', cursive;
		}
		h2 {
			font-size: 1.2em;
			width: 70%;
			font-family: 'Comfortaa', cursive;
		}
	}
`;
export const WrapperIMG = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	img {
		max-width: 100%;
	}
`;

export const TestCards = styled.div`
	display: grid;
	width: 100%;
	gap: 80px;
	grid-template-columns: 436px 436px 436px;

	.t1 {
		height: 100% !important;
		width: 100%;
		background: red;
	}
	.t2 {
		height: 100% !important;
		width: 100%;
		background: blue;
	}
	.t3 {
		height: 100% !important;
		width: 100%;
		background: red;
	}
	.t4 {
		height: 100% !important;
		width: 100%;
		background: blue;
	}
	.t5 {
		height: 100% !important;
		width: 100%;
		background: red;
	}
	.t6 {
		height: 100% !important;
		width: 100%;
		background: blue;
	}
	.t7 {
		height: 100% !important;
		width: 100%;
		background: red;
	}
`;

export const Column = styled.section`
	display: grid;
	grid-auto-rows: 700px 800px;
	gap: 10px;
`;
export const Column2 = styled.section`
	display: grid;
	gap: 10px;
	grid-auto-rows: 800px 700px;
`;
