import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 700px;
	width: 100%;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px;

	@media (min-width: 885px) {
		width: 435px;
	}
	@media (max-width: 163px) {
		width: 100%;
	}
`;

export const WrapperPhoto = styled.div`
	width: 100%;
	height: 90%;

	img {
		width: 100%;
		height: 100%;
	}
`;
export const WrapperInfos = styled.div`
	width: 100%;
	height: 10%;
	background: #fff;
	display: flex;
	align-items: center;
	padding: 10px;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px;

	div {
		flex: 1;
		display: flex;
		align-items: center;
	}
	button {
		flex: 1;
		background: #34a853;
		padding: 12px 30px;
		font-size: 1.05em;
		color: #fff;
		font-weight: 500;
	}

	@media (max-width: 450px) {
		padding: 5px;
		align-items: center;
		justify-content: center;

		div {
			font-size: 0.6em;
		}
		button {
			font-size: 0.8em;
			padding: 8px 20px;
		}
	}
`;
