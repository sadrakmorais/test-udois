import React, { useState, useEffect } from 'react';
import * as S from './styled';
import users from './users';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import Button from '../../../components/button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { green, red } from '@mui/material/colors';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import QuickSearchToolbar from '../../../components/search-toolbar';

const Users = () => {
	const [rows, setRows] = useState(users);
	const [searchText, setSearchText] = useState('');

	const columns = [
		{
			field: 'actions',
			headerName: 'Tipo',
			type: 'actions',
			width: 120,
			getActions: (params) => [
				<GridActionsCellItem
					icon={
						params.row.isAdmin ? (
							<PersonOutlineOutlinedIcon sx={{ color: green[500] }} />
						) : (
							<PersonOutlineOutlinedIcon sx={{ color: red[500] }} />
						)
					}
					label={params.row.name}
				/>,
			],
		},
		{ field: 'name', headerName: 'Nome', type: 'string', minWidth: 350 },
		{ field: 'email', headerName: 'Usuário', type: 'string', minWidth: 350 },
		{ field: 'firstDate', headerName: 'Desde', type: 'date', minWidth: 150 },
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
		const filteredRows = users.filter((row) => {
			return Object.keys(row).some((field) => {
				return searchRegex.test(row[field].toString());
			});
		});
		setRows(filteredRows);
	};

	useEffect(() => {
		setRows(users);
	}, [users]);

	return (
		<S.Wrapper>
			<section>
				<h1>Usuários</h1>

				<Button>Add Usuário</Button>
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

export default Users;
