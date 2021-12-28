import React, { useState } from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../../hooks/useAuth';
import { grey } from '@mui/material/colors';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import TagIcon from '@mui/icons-material/Tag';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import TranslateIcon from '@mui/icons-material/Translate';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import FindInPageIcon from '@mui/icons-material/FindInPage';

const MenuAdmin = () => {
	const { user, signOut } = useAuth();
	//const history = useNavigate();

	const [state, setState] = useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const handleLogout = async () => {
		await signOut();
		document.location.reload(true);
	};

	const list = () => (
		<S.WrapperList>
			<Link to={'/'}>
				<li>
					<HomeOutlinedIcon sx={{ color: grey[500] }} />
					Home
				</li>
			</Link>

			<Link to={'#'}>
				<li>
					<AssessmentOutlinedIcon sx={{ color: grey[500] }} />
					Relatório
				</li>
			</Link>

			<Link to={'/usuarios'}>
				<li>
					<ManageAccountsOutlinedIcon sx={{ color: grey[500] }} />
					Usuários
				</li>
			</Link>

			<Link to={'#'}>
				<li>
					<ManageSearchIcon sx={{ color: grey[500] }} />
					Pesquisas
				</li>
			</Link>

			<Link to={'#'}>
				<li>
					<SettingsOutlinedIcon sx={{ color: grey[500] }} />
					Configurações
				</li>
			</Link>

			<Link to={'/categorias'}>
				<li>
					<CategoryOutlinedIcon sx={{ color: grey[500] }} />
					Categorias
				</li>
			</Link>

			<Link to={'/faturas'}>
				<li>
					<AccountBalanceIcon sx={{ color: grey[500] }} />
					Faturas
				</li>
			</Link>

			<Link to={'moedas'}>
				<li>
					<PaidOutlinedIcon sx={{ color: grey[500] }} />
					Moedas
				</li>
			</Link>

			<Link to={'/paginas_templates'}>
				<li>
					<NoteAltOutlinedIcon sx={{ color: grey[500] }} />
					Páginas de template
				</li>
			</Link>

			<Link to={'#'}>
				<li>
					<TagIcon sx={{ color: grey[500] }} />
					Tags
				</li>
			</Link>

			<Link to={'#'}>
				<li>
					<VideoLibraryOutlinedIcon sx={{ color: grey[500] }} />
					Tutorial
				</li>
			</Link>

			<Link to={'#'}>
				<li>
					<InterestsOutlinedIcon sx={{ color: grey[500] }} />
					Ícones
				</li>
			</Link>

			<Link to={'#'}>
				<li>
					<TranslateIcon sx={{ color: grey[500] }} />
					Idiomas
				</li>
			</Link>

			<Link to={'#'}>
				<li>
					<ContentPasteSearchOutlinedIcon sx={{ color: grey[500] }} />
					Termos de Busca
				</li>
			</Link>

			<Link to={'#'}>
				<li>
					<PhotoLibraryOutlinedIcon sx={{ color: grey[500] }} />
					Templates
				</li>
			</Link>

			<Link to={'#'}>
				<li>
					<FontDownloadOutlinedIcon sx={{ color: grey[500] }} />
					Fontes
				</li>
			</Link>

			<Link to={'#'}>
				<li>
					<FindInPageIcon sx={{ color: grey[500] }} />
					Oportunidades
				</li>
			</Link>

			<li onClick={handleLogout}>
				<LogoutIcon sx={{ color: grey[500] }} />
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

export default MenuAdmin;
