import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import * as S from './styled';
import Chat from '../../components/chat-FAC';
import useMessages from '../../hooks/useMessages';

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		{...props}
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Fac = () => {
	const [expanded, setExpanded] = useState('panel1');
	const { messages } = useMessages();
	const [newMessages, setNewMessages] = useState(messages.length);

	useEffect(() => {
		setNewMessages(messages.length);
	}, [messages]);

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
		<S.Wrapper>
			<S.AccordionWrapper>
				<div className='accordion'>
					<ShoppingBagIcon sx={{ fontSize: '50px' }} />
					<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
						<AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
							<Typography>Cancelar Compras</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
						<AccordionSummary aria-controls='panel2a-content' id='panel2a-header'>
							<Typography>Pagamentos</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
						<AccordionSummary aria-controls='panel3a-content' id='panel3a-header'>
							<Typography>Artes</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>

				<div className='accordion'>
					<StorefrontIcon sx={{ fontSize: '50px' }} />
					<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
						<AccordionSummary aria-controls='panel4d-content' id='panel4d-header'>
							<Typography>Vendas</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
						<AccordionSummary aria-controls='panel5a-content' id='panel5a-header'>
							<Typography>Pagamentos</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
						<AccordionSummary aria-controls='panel6a-content' id='panel6a-header'>
							<Typography>Cancelamentos</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>

				<div className='accordion'>
					<SupportAgentIcon sx={{ fontSize: '50px' }} />
					<Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
						<AccordionSummary aria-controls='panel7d-content' id='panel7d-header'>
							<div className='questionBox'>
								<p>Perguntar</p>
								<aside>{newMessages}</aside>
							</div>
						</AccordionSummary>
						<AccordionDetails>
							<section className='chat'>
								<Chat />
							</section>
						</AccordionDetails>
					</Accordion>
				</div>
			</S.AccordionWrapper>
		</S.Wrapper>
	);
};

export default Fac;
