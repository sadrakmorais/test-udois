import React, { useState } from 'react';
import * as S from './styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import charts1 from '../../assets/author/charts/charts1.svg';
import charts2 from '../../assets/author/charts/charts2.svg';
import charts3 from '../../assets/author/charts/charts3.svg';

const currencies = [
	{
		value: 'USD',
		label: '$ USD',
	},
	{
		value: 'EUR',
		label: '€ EUR',
	},
	{
		value: 'BTC',
		label: '฿ BTC',
	},
	{
		value: 'JPY',
		label: '¥ JPY',
	},
	{
		value: 'BRL',
		label: 'R$ BRL',
	},
];

const ChartsAuthor = () => {
	const [currency, setCurrency] = useState('BRL');
	const [value, setValue] = useState(12225);

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};

	return (
		<S.Wrapper>
			<S.Currency>
				<Box
					component='form'
					sx={{
						'& .MuiTextField-root': { width: '12ch' },
					}}
					noValidate
					autoComplete='off'>
					<div>
						<TextField
							id='standard-select-currency'
							select
							label='Escolha'
							value={currency}
							onChange={handleChange}
							helperText=''
							variant='standard'>
							{currencies.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</div>
				</Box>
			</S.Currency>

			<S.Recommendation>
				<div>
					<h1>Indicações Vendidas</h1>
					<h2>
						{currency}
						{value}
					</h2>
					<span>R$ 5,00 por indicação</span>
				</div>
				<img src={charts1} alt='Grafico1' />
			</S.Recommendation>

			<S.ArtSales>
				<div>
					<h1>Artes Vendidas</h1>
					<h2>
						{currency}
						{value}
					</h2>
					<span>R$ 2,00 por Arte</span>
				</div>
				<img src={charts2} alt='Grafico1' />
			</S.ArtSales>

			<S.Balance>
				<div>
					<h1>Saldo disponível</h1>
					<h2>
						{currency}
						{value}
					</h2>
				</div>
				<img src={charts3} alt='Grafico1' />
			</S.Balance>
		</S.Wrapper>
	);
};

export default ChartsAuthor;
