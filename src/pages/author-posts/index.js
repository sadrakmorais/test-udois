import React from 'react';
import * as S from './styled';
import ChartsAuthor from '../../components/charts-author';
import UnpublishedOutlinedIcon from '@mui/icons-material/UnpublishedOutlined';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CardList from '../../components/cardList';

const AuthorPosts = () => {
	return (
		<S.Wrapper>
			<ChartsAuthor />

			<S.Setting>
				<div>
					<UnpublishedOutlinedIcon sx={{ fontSize: '44px' }} />
					<TimelapseIcon sx={{ fontSize: '44px' }} />
					<CheckCircleOutlineIcon sx={{ fontSize: '44px' }} />
				</div>

				<button>
					Adicionar Arte <AddOutlinedIcon />
				</button>
			</S.Setting>

			<S.CardsContainer>
				<CardList />
			</S.CardsContainer>
		</S.Wrapper>
	);
};

export default AuthorPosts;
