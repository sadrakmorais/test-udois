import React, { useState, useEffect } from 'react';
import * as S from './styled';
import moedas from './moeda';
import { DataGrid } from '@mui/x-data-grid';
import Button from '../../../components/button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import QuickSearchToolbar from '../../../components/search-toolbar';

const Currency = () => {
	const [rows, setRows] = useState(moedas);
	const [searchText, setSearchText] = useState('');

	const columns = [
		{ field: 'name', headerName: 'Nome', type: 'string', minWidth: 250 },
		{ field: 'cod', headerName: 'Código ISO', type: 'string', minWidth: 250 },
		{ field: 'symbol', headerName: 'Símbolo', type: 'string', minWidth: 150 },
		{ field: 'royalties', headerName: 'Royalties', minWidth: 150 },
		{ field: 'value', headerName: 'Valor', minWidth: 150 },
		{ field: 'indication', headerName: 'Indicação', minWidth: 150 },
		{
			field: 'func',
			headerName: 'Funções',
			width: 300,
			renderCell: (params) => (
				<strong
					style={{
						flex: '1',
						justifyContent: 'space-around',
						display: 'flex',
						gap: '10px',
						color: '#9D9D9D',
					}}>
					<AttachMoneyIcon />
					<KeyIcon />
					<VisibilityOutlinedIcon />
					<EditOutlinedIcon />
					<RemoveCircleOutlineOutlinedIcon />
				</strong>
			),
		},
	];
	const escapeRegExp = (value) => {
		return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	};

	const requestSearch = (searchValue) => {
		setSearchText(searchValue);
		const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
		const filteredRows = moedas.filter((row) => {
			return Object.keys(row).some((field) => {
				return searchRegex.test(row[field].toString());
			});
		});
		setRows(filteredRows);
	};

	useEffect(() => {
		setRows(moedas);
	}, [moedas]);

	return (
		<S.Wrapper>
			<section>
				<h1>Moedas</h1>

				<Button>Add Moeda</Button>
			</section>

			<S.Grid>
				<DataGrid
					components={{ Toolbar: QuickSearchToolbar }}
					rows={rows}
					columns={columns}
					componentsProps={{
						toolbar: {
							value: searchText,
							onChange: (event) => requestSearch(event.target.value),
							clearSearch: () => requestSearch(''),
						},
					}}
				/>
			</S.Grid>
		</S.Wrapper>
	);
};

export default Currency;
