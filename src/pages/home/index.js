import React from 'react';
import * as S from './styled';
import ilustracaoIMG from '../../assets/home/ilust1.svg';
import Chips from '../../components/chips';
import CardList from '../../components/cardList';

const Home = () => {
	return (
		<S.Wrapper>
			<S.WrapperIntro>
				<S.WrapperInfos>
					<h1>Edite.|</h1>
					<h2>Milhares de artes prontas e um incrível editor online!</h2>
				</S.WrapperInfos>
				<S.WrapperIMG>
					<img src={ilustracaoIMG} alt='logo' />
				</S.WrapperIMG>
			</S.WrapperIntro>
			<Chips />
			<CardList />
		</S.Wrapper>
	);
};

export default Home;
