import styled from 'styled-components';

export const Container = styled.header`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	z-index: 3;
	justify-content: space-between;
	padding: 0 2%;
	transition: all ease 0.5s;

	div {
		display: flex;
		gap: 10px;
	}

	&.scroll {
		box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
	}

	.logoOFF {
		display: none;
	}

	&.logoScroll {
		display: flex;
	}
`;

export const WrapperMenu = styled.section`
	display: flex;
`;
