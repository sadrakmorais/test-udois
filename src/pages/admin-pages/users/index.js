import React, { useState, useEffect } from 'react';
import * as S from './styled';
import users from './users';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { DataGrid, GridToolbarDensitySelector, GridToolbarFilterButton } from '@mui/x-data-grid';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { useDemoData } from '@mui/x-data-grid-generator';

const Users = () => {
	const rows: GridRowsProp = users.map((user) => {
		return {
			id: user.id,
			col1: user.name,
			col2: user.firstDate,
			col3: user.type,
			col4: [
				user.func.func1,
				user.func.func2,
				user.func.func3,
				user.func.func4,
				user.func.func5,
			],
		};
	});

	const columns: GridColDef[] = [
		{ field: 'col3', headerName: 'Tipo', width: 80, type: 'number' },
		{ field: 'col1', headerName: 'Nome', width: 200 },
		{ field: 'id', headerName: 'Id', width: 250 },
		{ field: 'col2', headerName: 'Desde', width: 250, type: 'date' },
		{ field: 'col4', headerName: 'Função', width: 250 },
	];

	const [searchText, setSearchText] = useState('');

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
			</Box>
		);
	};

	QuickSearchToolbar.propTypes = {
		clearSearch: PropTypes.func.isRequired,
		onChange: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired,
	};

	return (
		<S.Wrapper>
			<section>
				<h1>Usuários</h1>

				<button>
					Add Usuário <AddOutlinedIcon />
				</button>
			</section>

			<S.Grid>
				<DataGrid
					components={{ Toolbar: QuickSearchToolbar }}
					rows={rows}
					columns={columns}
				/>
			</S.Grid>
		</S.Wrapper>
	);
};

export default Users;
