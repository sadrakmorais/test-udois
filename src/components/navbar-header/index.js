import React from 'react';
import Menu from '../menu';
import MenuAdmin from '../menu-admin';
import * as S from './styled';
import logoIMG from '../../assets/home/navbar/logo.svg';
import logo2IMG from '../../assets/home/navbar/logo2.svg';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useAuth } from '../../hooks/useAuth';

import { Link } from 'react-router-dom';

const NavBarHeader = ({ scroll }) => {
	const { user } = useAuth();

	return (
		<S.Container className={scroll ? ' scroll' : ''}>
			<S.WrapperMenu>
				{user?.accessLevel === 20 ? <MenuAdmin /> : <Menu />}
				<Link to={`/home`}>
					<img className={scroll ? 'logoOFF' : 'logoScroll'} src={logoIMG} alt='logo' />
				</Link>
				<Link to={`/home`}>
					<img className={scroll ? 'logoScroll' : 'logoOFF'} src={logo2IMG} alt='logo' />
				</Link>
			</S.WrapperMenu>
			<div>
				<SearchIcon />
				<ShoppingBagIcon />
			</div>
		</S.Container>
	);
};

export default NavBarHeader;
