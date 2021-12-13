import React from 'react';
import Menu from '../menu';
import * as S from './styled';
import logoIMG from '../../assets/home/navbar/logo.svg';
import logo2IMG from '../../assets/home/navbar/logo2.svg';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: 'rgb(0,0,0,0)',
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: '#000',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100px',
		[theme.breakpoints.up('sm')]: {
			width: '15ch',
			'&:focus': {
				width: '60ch',
			},
		},
	},
}));

const NavBarHeader = ({ scroll }) => {
	return (
		<S.Container className={scroll ? ' scroll' : ''}>
			<S.WrapperMenu>
				<Menu nameUser='Maristela' emailUser='maristela@gmail.com' />
				<Link to={`/home`}>
					<img className={scroll ? 'logoOFF' : 'logoScroll'} src={logoIMG} alt='logo' />
				</Link>
				<Link to={`/home`}>
					<img className={scroll ? 'logoScroll' : 'logoOFF'} src={logo2IMG} alt='logo' />
				</Link>
			</S.WrapperMenu>
			<div>
				<Box sx={{ flexGrow: 1, backgroundColor: '#fff' }}>
					<Search>
						<StyledInputBase
							placeholder='Faça sua busca'
							inputProps={{ 'aria-label': 'search' }}
						/>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
					</Search>
				</Box>
				<ShoppingBagIcon />
			</div>
		</S.Container>
	);
};

export default NavBarHeader;
