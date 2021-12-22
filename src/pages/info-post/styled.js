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
	justify-content: space-between;
	padding: 44px 65px;
	overflow-y: auto;
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
	button {
		width: 100%;
		color: #fff;
		background: #34a853;
		padding: 22px 0;
		border-radius: 5px;
	}
`;

export const PostInfos = styled.div`
	height: 425px;
	width: 735px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding: 10px;
	position: relative;
	bottom: 70px;

	@media (max-width: 1200px) {
		width: 100%;
		gap: 0;
		bottom: 100px;
	}
	@media (max-width: 450px) {
		h1 {
			font-size: 2em;
		}
		p {
			font-size: 1em;
		}
	}

	aside {
		box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px,
			rgba(17, 17, 26, 0.1) 0px 16px 56px;

		width: 60px;
		height: 68px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		margin-left: 90%;
		@media (max-width: 1200px) {
			margin-left: 0;
		}
	}

	h1 {
		font-size: 2.5em;
		font-weight: 300;
		font-family: 'Roboto', sans-serif;
	}
	p {
		font-weight: 100;
		font-size: 1.375em;
		height: 300px;
		overflow-y: auto;
	}
`;
export const AuthorInfos = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 490px) {
		flex-direction: column;
	}
	img {
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
	.stats {
		gap: 30px;
		align-items: center;
		div {
			align-items: center;
			gap: 5px;
		}
	}
`;
