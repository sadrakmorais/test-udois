import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	padding: 50px 3%;
	align-items: center;
	justify-content: center;
`;

export const AccordionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 800px;
	width: 100%;
	gap: 20px;

	.accordion {
		box-shadow: rgba(0, 0, 0, 0.15) 2.95px 2.95px 2.6px;

		section {
			background-color: #34a853;
			height: 300px;
			overflow-y: auto;
		}

		.questionBox {
			display: flex;
			justify-content: space-between;
			width: 100%;
			padding: 10px;
			align-items: center;

			h1 {
			}
			aside {
				background: #34a853;
				border-radius: 50%;
				height: 30px;
				width: 30px;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
			}
		}

		.chat {
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			font-size: 4em;
		}
	}
`;
