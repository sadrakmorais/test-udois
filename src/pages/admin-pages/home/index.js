import React from 'react';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import * as S from './styled';

import { useAuth } from '../../../hooks/useAuth';

const Home = () => {
	const { user } = useAuth();

	return (
		<S.Wrapper>
			<AdminPanelSettingsOutlinedIcon sx={{ fontSize: '100px' }} />

			<h1>Olá,{user?.name} !</h1>
		</S.Wrapper>
	);
};

export default Home;
