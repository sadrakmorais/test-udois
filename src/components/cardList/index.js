import React from 'react';
import * as S from './styled.js';
import Card from '../../components/cardEdit';
import { Link, useNavigate } from 'react-router-dom';

import imageIMG from '../../assets/home/cards/image.png';
import imageIMG1 from '../../assets/home/cards/image1.png';
import imageIMG2 from '../../assets/home/cards/image2.png';
import imageIMG3 from '../../assets/home/cards/image3.png';
import authorIMG from '../../assets/home/cards/author.png';

const CardList = () => {
	const arr = [
		{
			idPost: 'gsdg2sd121F',
			postImg: imageIMG,
			description: 'Convite digital animação',
			author: {
				name: 'Guy Hawking',
				avatar: authorIMG,
				criations: 533,
			},
			likes: 623,
			views: 4232,
			url: 'https://www.youtube.com/watch?v=ha5vhjHN7hE',
		},
		{
			idPost: 'gs4dg2sd121F',
			postImg: imageIMG,
			description: 'Convite digital animação',
			author: {
				name: 'Guy Hawking',
				avatar: authorIMG,
				criations: 533,
			},
			likes: 623,
			views: 4232,
			url: 'https://www.youtube.com/watch?v=ha5vhjHN7hE',
		},
		{
			idPost: 'gsdg24sd121F',
			postImg: imageIMG1,
			description: 'Convite digital animação',
			author: {
				name: 'Guy Hawking',
				avatar: authorIMG,
				criations: 533,
			},
			likes: 723,
			views: 8232,
			url: 'https://www.youtube.com/watch?v=ha5vhjHN7hE',
		},
		{
			idPost: 'gsdDSg24sd121F',
			postImg: imageIMG2,
			description: 'Convite digital animação',
			author: {
				name: 'Guy Hawking',
				avatar: authorIMG,
				criations: 533,
			},
			likes: 2023,
			views: 7232,
			url: 'https://www.youtube.com/watch?v=ha5vhjHN7hE',
		},
		{
			idPost: '23gsdDSg24sd121F',
			postImg: imageIMG3,
			description: 'Convite digital animação',
			author: {
				name: 'Guy Hawking',
				avatar: authorIMG,
				criations: 533,
			},
			likes: 2023,
			views: 7232,
			url: 'https://www.youtube.com/watch?v=ha5vhjHN7hE',
		},
		{
			idPost: 'gsdDSg24sd121F',
			postImg: imageIMG2,
			description: 'Convite digital animação',
			author: {
				name: 'Guy Hawking',
				avatar: authorIMG,
				criations: 533,
			},
			likes: 2023,
			views: 7232,
			url: 'https://www.youtube.com/watch?v=ha5vhjHN7hE',
		},
	];
	const history = useNavigate();
	const handleDetails = () => {
		history('/');
	};

	return (
		<S.Wrapper>
			{arr.map((post) => (
				<Link to={`/infopost/${post.idPost}`}>
					<Card post={post} key={arr.idPost} onClick={handleDetails} />
				</Link>
			))}
		</S.Wrapper>
	);
};

export default CardList;
