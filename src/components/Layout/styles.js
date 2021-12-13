import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
`;

export const Workspace = styled.div`
	flex: 0.9px;
	background: #fff;
	height: 100%;
	overflow-y: auto;
	padding: 10px 10px 80px 10px;
	z-index: 1;
`;
