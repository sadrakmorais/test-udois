import React, { useState, useEffect } from 'react';
import * as S from './styled';
import pageTemplates from './pageTemplates';
import { DataGrid } from '@mui/x-data-grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import QuickSearchToolbar from '../../../components/search-toolbar';

const PagesTemplates = () => {
	const [rows, setRows] = useState(pageTemplates);
	const [searchText, setSearchText] = useState('');

	const columns = [
		{ field: 'tittle', headerName: 'Titulo', type: 'string', minWidth: 500 },
		{ field: 'language', headerName: 'Idioma', type: 'string', width: 100 },
		{ field: 'views', headerName: 'Visualizações', type: 'number', width: 200 },
	];

	const escapeRegExp = (value) => {
		return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	};

	const requestSearch = (searchValue) => {
		setSearchText(searchValue);
		const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
		const filteredRows = pageTemplates.filter((row) => {
			return Object.keys(row).some((field) => {
				return searchRegex.test(row[field].toString());
			});
		});
		setRows(filteredRows);
	};

	useEffect(() => {
		setRows(pageTemplates);
	}, [pageTemplates]);

	return (
		<S.Wrapper>
			<section>
				<h1>Páginas Templates</h1>
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

export default PagesTemplates;
