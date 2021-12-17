import React, { useState, useEffect, useCallback, useMemo } from 'react';
import * as S from './styled';
import users from './users';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { DataGrid, GridToolbarFilterButton, GridActionsCellItem } from '@mui/x-data-grid';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import Button from '../../../components/button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { green, red } from '@mui/material/colors';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

const Users = () => {
	const [rows, setRows] = useState(users);
	const [searchText, setSearchText] = useState('');

	const columns = useMemo(() => [
		{
			field: 'actions',
			headerName: 'Tipo',
			type: 'actions',
			width: 80,
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
		{ field: 'name', headerName: 'Nome', type: 'string', minWidth: 200 },
		{ field: 'id', headerName: 'Id', type: 'string', width: 300 },
		{ field: 'firstDate', headerName: 'Desde', type: 'date', width: 130 },
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
	]);
	const escapeRegExp = (value) => {
		return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	};

	const QuickSearchToolbar = (props) => {
		return (
			<Box
				sx={{
					p: 0.5,
					pb: 0,
					justifyContent: 'space-between',
					display: 'flex',
					alignItems: 'flex-start',
					flexWrap: 'wrap',
				}}>
				<div>
					<GridToolbarFilterButton />
				</div>
				<TextField
					variant='standard'
					value={props.value}
					onChange={props.onChange}
					placeholder='Buscar...'
					InputProps={{
						startAdornment: <SearchIcon fontSize='small' />,
						endAdornment: (
							<IconButton
								title='Clear'
								aria-label='Clear'
								size='small'
								style={{ visibility: props.value ? 'visible' : 'hidden' }}
								onClick={props.clearSearch}>
								<ClearIcon fontSize='small' />
							</IconButton>
						),
					}}
					sx={{
						width: {
							xs: 1,
							sm: 'auto',
						},
						m: (theme) => theme.spacing(1, 0.5, 1.5),
						'& .MuiSvgIcon-root': {
							mr: 0.5,
						},
						'& .MuiInput-underline:before': {
							borderBottom: 1,
							borderColor: 'divider',
						},
					}}
				/>
			</Box>
		);
	};

	QuickSearchToolbar.propTypes = {
		clearSearch: PropTypes.func.isRequired,
		onChange: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired,
	};

	const requestSearch = (searchValue) => {
		setSearchText(searchValue);
		const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
		const filteredRows = rows.filter((row) => {
			return Object.keys(row).some((field) => {
				return searchRegex.test(row[field].toString());
			});
		});
		setRows(filteredRows);
	};

	useEffect(() => {
		setRows(rows);
	}, [rows]);

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
