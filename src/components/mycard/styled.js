import styled from 'styled-components';

export const Wrapper = styled.div`
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
	flex-direction: column;
	align-items: flex-start;
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
		div {
			font-size: 0.6em;
		}
		button {
			font-size: 0.8em;
			padding: 8px 20px;
		}
	}
`;

export const Icons = styled.div`
	display: flex;
	gap: 5px;
	align-self: flex-end;
	position: relative;
	bottom: 32px;

	div {
		border-radius: 50%;
		padding: 5px;
		color: #fff;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	}

	.edit,
	.msg,
	.checked {
		background: #34a853;
	}
	.delete,
	.reproved {
		background: #ea4335;
	}
	.lapse {
		background: #4285f4;
	}
`;
