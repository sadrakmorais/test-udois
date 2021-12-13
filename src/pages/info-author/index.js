import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import authorIMG from '../../assets/home/cards/author.png';
import * as S from './styled';
import ShareIcon from '@mui/icons-material/Share';
import CardList from '../../components/cardList';

const authors = [
	{
		id: '131321554',
		name: 'Guy Hawking',
		avatar: authorIMG,
		criations: 533,
		solds: 480,
	},
	{
		id: '533131321554',
		name: 'Guy Hawking',
		avatar: authorIMG,
		criations: 533,
		solds: 480,
	},
	{
		id: '131366321554',
		name: 'Guy Teste',
		avatar: authorIMG,
		criations: 533,
		solds: 480,
	},
	{
		id: '13132155410',
		name: 'Guy Hawking',
		avatar: authorIMG,
		criations: 533,
		solds: 480,
	},
	{
		id: '66131321554',
		name: 'Guy Hawking',
		avatar: authorIMG,
		criations: 533,
		solds: 480,
	},
	{
		id: '13132421554',
		name: 'Guy Hawking',
		avatar: authorIMG,
		criations: 533,
		solds: 480,
	},
];

const InfoAuthor = () => {
	const [author, setAuthor] = useState([]);
	const { idauthor } = useParams();

	useEffect(() => {
		const fetchAuthor = () => {
			authors.map((e) => {
				if (e.id === idauthor) {
					setAuthor(e);
				}
			});
		};
		fetchAuthor();
	}, []);

	console.log(author);

	return (
		<S.Wrapper>
			<S.AuthorDetails>
				<img src={author.avatar} alt={author.name} />
				<h1>{author.name}</h1>
				<div>
					<p>+ de {author.criations} criações</p>
					<p>{author.solds} Vendas</p>
				</div>
				<div className='icon'>
					<ShareIcon sx={{ fontSize: 54 }} />
				</div>
			</S.AuthorDetails>
			<CardList />
		</S.Wrapper>
	);
};

export default InfoAuthor;
