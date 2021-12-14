import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	padding: 0 3%;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
	flex-wrap: wrap;

	@media (max-width: 450px) {
	}
	img {
		flex: 1;
		@media (max-width: 450px) {
			width: 100px;
		}
	}
	h1 {
		font-size: 0.875em;
		font-weight: 300;
		@media (max-width: 450px) {
			font-size: 0.675em;
		}
	}
	h2 {
		font-size: 1.5em;
		font-weight: 400;
	}
	span {
		font-size: 0.57em;
		font-weight: 400;
		color: #9d9d9d;
	}
`;
export const Recommendation = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 30px;
	border-right: 1px solid #e3e1e1;
	min-width: 150px;

	@media (max-width: 450px) {
		flex-direction: column;
		border: none;
	}

	div {
		flex: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
export const Balance = styled.div`
	align-items: center;
	justify-content: center;
	padding: 30px;
	flex: 2;
	display: flex;
	min-width: 150px;
	@media (max-width: 450px) {
		flex-direction: column;
		border: none;
	}

	div {
		flex: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
export const ArtSales = styled.div`
	align-items: center;
	justify-content: center;
	padding: 30px;
	flex: 2;
	display: flex;
	border-right: 1px solid #e3e1e1;
	min-width: 150px;
	@media (max-width: 450px) {
		flex-direction: column;
		border: none;
	}

	div {
		flex: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
export const Currency = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex: 1;
`;
