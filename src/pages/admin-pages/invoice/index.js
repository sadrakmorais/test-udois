import React, { useState, useEffect } from 'react';
import * as S from './styled';
import invoices from './invoices';
import { DataGrid } from '@mui/x-data-grid';
import Button from '../../../components/button';
import QuickSearchToolbar from '../../../components/search-toolbar';
import clsx from 'clsx';
import Box from '@mui/material/Box';

const Invoices = () => {
	const [rows, setRows] = useState(invoices);
	const [searchText, setSearchText] = useState('');

	const columns = [
		{ field: 'id', headerName: 'ID Fatura', type: 'string', minWidth: 250 },
		{ field: 'idT', headerName: 'ID Transação', type: 'string', minWidth: 250 },
		{
			field: 'status',
			headerName: 'Status',
			minWidth: 150,
			valueOptions: ['Pago', 'Pendente', 'Cancelado'],
			type: 'singleSelect',
			editable: true,
			cellClassName: (params) =>
				clsx('super-app', {
					ok: params.value === 'Pago',
					pending: params.value === 'Pendente',
					cancel: params.value === 'Cancelado',
				}),
		},
		{ field: 'user', headerName: 'Símbolo', type: 'string', minWidth: 150 },
		{ field: 'date', headerName: 'Data', type: 'date', minWidth: 150 },
		{ field: 'pay', headerName: 'Pago Em', type: 'date', minWidth: 150 },
		{ field: 'royalties', headerName: 'Royalties', minWidth: 100 },
		{ field: 'userIndicator', headerName: 'Usuário Indicador', minWidth: 150 },
		{ field: 'indication', headerName: 'Indicação', minWidth: 100 },
		{ field: 'value', headerName: 'Valor', minWidth: 150 },
	];
	const escapeRegExp = (value) => {
		return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	};

	const requestSearch = (searchValue) => {
		setSearchText(searchValue);
		const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
		const filteredRows = invoices.filter((row) => {
			return Object.keys(row).some((field) => {
				return searchRegex.test(row[field].toString());
			});
		});
		setRows(filteredRows);
	};

	useEffect(() => {
		setRows(invoices);
	}, [invoices]);

	return (
		<S.Wrapper>
			<section>
				<h1>Faturas</h1>

				<Button>Add Faturas</Button>
			</section>

			<S.Grid>
				<Box
					sx={{
						height: 700,
						width: 1,
						'& .super-app.ok': {
							backgroundColor: '#34a853',
							color: '#fff',
							fontWeight: '600',
						},
						'& .super-app.cancel': {
							backgroundColor: '#d47483',
							color: '#fff',
							fontWeight: '600',
						},
						'& .super-app.pending': {
							backgroundColor: '#c79808',
							color: '#fff',
							fontWeight: '600',
						},
					}}>
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
				</Box>
			</S.Grid>
		</S.Wrapper>
	);
};

export default Invoices;
