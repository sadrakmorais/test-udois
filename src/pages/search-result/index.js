import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Chips from '../../components/chips';
import CardList from '../../components/cardList';
import * as S from './styled';

const chips = [
	{
		idS: 'GHG552ms',
		search: 'Chá de Bebé',
	},
	{
		idS: 'f3GHG552ms',
		search: 'Chá de Panela',
	},
	{
		idS: 'f3G33vHG552ms',
		search: 'Chá de Menina',
	},
	{
		idS: '23f3GHG552ms',
		search: 'Convite Disney',
	},
	{
		idS: 'S3f3GHG552ms',
		search: 'Chá de Menino',
	},
	{
		idS: 'f3GHG35v552ms',
		search: 'Convite para Meninas',
	},
	{
		idS: 'ee1f3GHG552ms',
		search: 'Convites Fofos',
	},
];

const SearchResult = () => {
	const [search, setSearch] = useState('');
	const { idsearch } = useParams();

	useEffect(() => {
		chips.map((e) => {
			if (idsearch === e.idS) {
				return setSearch(e);
			}
		});
	}, []);

	return (
		<S.Wrapper>
			<div>
				<h1>{search.search}</h1>
				<p>Milhares de artes prontas e um incrível editor online!</p>
			</div>
			<Chips />
			<CardList />
		</S.Wrapper>
	);
};

export default SearchResult;
