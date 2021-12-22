import React, { useState } from 'react';
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
	const [searchBar, setSearchBar] = useState(false);

	const handleBar = () => {
		setSearchBar(!searchBar);
		console.log('cliquei');
	};

	return (
		<S.Container className={scroll ? ' scroll' : ''}>
			<S.WrapperMenu className={searchBar ? 'searchON' : 'searchOFF'}>
				{user?.accessLevel === 20 ? <MenuAdmin /> : <Menu />}
			</S.WrapperMenu>

			<section className={searchBar ? 'searchON' : 'searchOFF'}>
				<Link to={`/home`}>
					<img className={scroll ? 'logoOFF' : 'logoScroll'} src={logoIMG} alt='logo' />
				</Link>
				<Link to={`/home`}>
					<img className={scroll ? 'logoScroll' : 'logoOFF'} src={logo2IMG} alt='logo' />
				</Link>
			</section>
			<div>
				<SearchIcon onClick={handleBar} />
				<ShoppingBagIcon className={searchBar ? 'searchON' : 'searchOFF'} />
			</div>
		</S.Container>
	);
};

export default NavBarHeader;
