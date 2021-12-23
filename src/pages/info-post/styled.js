import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	padding: 10px 3%;
	flex-direction: column;
	gap: 50px;
`;
export const PostDetails = styled.div`
	display: flex;
	width: 100%;
	margin-top: 120px;
	justify-content: flex-start;
	gap: 100px;
	padding: 44px 65px;
	overflow-y: auto;

	.mobileTittle {
		display: none;
		@media (max-width: 450px) {
			display: block;

			font-size: 1.5em;
			font-weight: 300;
			text-align: center;
		}
	}

	.containerInfos {
		display: flex;
		flex-direction: column;
		gap: 20px;

		.howMake {
			height: 500px;
			padding-right: 10%;
			overflow-y: auto;

			@media (max-width: 450px) {
				height: 300px;
			}
		}
	}
	@media (max-width: 1200px) {
		flex-direction: column;
	}
	@media (max-width: 490px) {
		padding: 30px 40px;
	}
	p {
		margin-top: 10px;
		font-weight: 100;
		font-size: 1.125em;
	}
`;

export const PostPhoto = styled.div`
	width: 424px;
	display: flex;
	flex-direction: column;

	@media (max-width: 1200px) {
		bottom: 180px;
	}
	@media (max-width: 490px) {
		bottom: 150px;
		width: 100%;
	}
	img {
		max-height: 643px;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
	}
`;

export const Footer = styled.div`
	display: flex;
	padding: 10px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	justify-content: space-between;
	.stats {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		div {
			display: flex;
			align-items: center;
			gap: 10px;
		}
	}

	button {
		color: #fff;
		background: #34a853;
		padding: 22px 0;
		width: 50%;
	}
`;

export const PostInfos = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	h1 {
		width: 70%;
		font-size: 2.5em;
		font-weight: 300;

		@media (max-width: 450px) {
			display: none;
		}
	}

	aside {
		background: #fff;
		border-radius: 50%;
		cursor: pointer;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
export const AuthorInfos = styled.div`
	display: flex;

	img {
		width: 51px;
		height: 51px;
		border: 2px solid transparent;
		transition: 0.2s ease all;

		&:hover {
			border-color: #34a853;
			border-radius: 50%;
		}
	}
	p,
	h2 {
		font-size: 1em;
		font-weight: 100;
		margin-top: 5px;
	}
	.author-infos {
		flex-direction: column;
		margin-left: 20px;
		@media (max-width: 490px) {
			flex-direction: column;
		}
	}
	div {
		display: flex;
	}
`;
