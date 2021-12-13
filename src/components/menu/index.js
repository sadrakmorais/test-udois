import React, { useState } from 'react';
import * as S from './styled';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import QuizIcon from '@mui/icons-material/Quiz';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../hooks/useAuth';

function Menu() {
	const { user } = useAuth();

	const [state, setState] = useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<List>
				{['Compras', 'Vender', 'Configurações', 'Ajuda', 'Sair'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{text === 'Compras' ? (
								<ShoppingCartIcon />
							) : text === 'Vender' ? (
								<StoreIcon />
							) : text === 'Configurações' ? (
								<SettingsIcon />
							) : text === 'Ajuda' ? (
								<QuizIcon />
							) : text === 'Sair' ? (
								<LogoutIcon />
							) : (
								''
							)}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Box>
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
}

export default Menu;
