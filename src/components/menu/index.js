import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SettingsIcon from '@mui/icons-material/Settings';
import QuizIcon from '@mui/icons-material/Quiz';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Menu = () => {
	const { user, signOut } = useAuth();
	const history = useNavigate();

	const [state, setState] = useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const handleTest = async () => {
		await signOut();
		document.location.reload(true);
	};

	const list = () => (
		<S.WrapperList>
			<li>
				<ShoppingCartIcon />
				Compras
			</li>

			<li>
				<StoreIcon />
				Vendas
			</li>

			<Link to={`/author/${user?.id}/myposts`}>
				<li>
					<PhotoLibraryIcon />
					Minhas Artes
				</li>
			</Link>

			<li>
				<SettingsIcon />
				Configurações
			</li>
			<Link to='/ajuda'>
				<li>
					<QuizIcon />
					Ajuda
				</li>
			</Link>
			<li onClick={handleTest}>
				<LogoutIcon />
				Sair
			</li>
		</S.WrapperList>
	);

	return (
		<div>
			{
				<React.Fragment key={'left'}>
					<Button onClick={toggleDrawer('left', true)}>
						<MenuIcon sx={{ color: 'black' }} />
					</Button>
					<SwipeableDrawer
						anchor={'left'}
						open={state['left']}
						onClose={toggleDrawer('left', false)}
						onOpen={toggleDrawer('left', true)}>
						<S.WrapperUser>
							<Avatar
								alt={user?.name}
								src={user?.avatar}
								sx={{ width: 70, height: 70 }}
							/>
							<h1>{user?.name}</h1>
							<p>{user?.email}</p>
						</S.WrapperUser>

						{list('left')}
					</SwipeableDrawer>
				</React.Fragment>
			}
		</div>
	);
};

export default Menu;
