import React, { useState, useEffect } from 'react';
import * as S from './styled';
import category from './category';
import { DataGrid } from '@mui/x-data-grid';
import Button from '../../../components/button';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import QuickSearchToolbar from '../../../components/search-toolbar';

const Category = () => {
	const [rows, setRows] = useState(category);
	const [searchText, setSearchText] = useState('');

	const columns = [
		{ field: 'name', headerName: 'Nome', type: 'string', minWidth: 200 },
		{ field: 'language', headerName: 'Idioma', type: 'string', width: 300 },
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
		const filteredRows = category.filter((row) => {
			return Object.keys(row).some((field) => {
				return searchRegex.test(row[field].toString());
			});
		});
		setRows(filteredRows);
	};

	useEffect(() => {
		setRows(category);
	}, [category]);

	return (
		<S.Wrapper>
			<section>
				<h1>Usuários</h1>

				<Button>Adicionar Categoria</Button>
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

export default Category;
