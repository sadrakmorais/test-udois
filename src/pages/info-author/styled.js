import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0 3%;
`;
export const AuthorDetails = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 50px 0;
	img {
		max-width: 136px;
	}
	h1 {
		font-size: 2.25em;
		font-weight: 400;
		margin-top: 30px;
	}

	div {
		display: flex;
		gap: 15px;
		margin-top: 15px;

		p {
			font-weight: 100;
			font-size: 0.875em;
		}
	}
	.icon {
		margin-top: 60px;
		border-radius: 50%;
		padding: 10px;
		transition: 0.2s all ease;

		&:hover {
			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		}
	}
`;
