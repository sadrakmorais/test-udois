import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './styled';
import Chips from '../../components/chips';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CardList from '../../components/cardList';
import { Link } from 'react-router-dom';

import imageIMG from '../../assets/home/cards/image.png';
import imageIMG1 from '../../assets/home/cards/image1.png';
import imageIMG2 from '../../assets/home/cards/image2.png';
import imageIMG3 from '../../assets/home/cards/image3.png';
import authorIMG from '../../assets/home/cards/author.png';

const arr = [
	{
		idPost: 'gsdg2sd121F',
		postImg: imageIMG,
		description: 'Convite digital animação',
		howMake: `
		Como fazer convite online aniversário luca disney pixar?
1) Escolha um dos muitos modelos disponíveis de convite online aniversário luca disney pixar para você editar.
2) Edite e personalize com muita facilidade seu convite online aniversário luca disney pixar usando nosso editor online.
		`,
		author: {
			id: '131321554',
			name: 'Guy Hawking',
			avatar: authorIMG,
			criations: 533,
		},
		likes: 623,
		views: 4232,
		sold: 34,
		url: 'https://www.youtube.com/watch?v=ha5vhjHN7hE',
	},
	{
		idPost: 'gs4dg2sd121F',
		postImg: imageIMG,
		description: 'Convite digital animação',
		howMake: `
		Como fazer convite online aniversário luca disney pixar?
1) Escolha um dos muitos modelos disponíveis de convite online aniversário luca disney pixar para você editar.
2) Edite e personalize com muita facilidade seu convite online aniversário luca disney pixar usando nosso editor online.
		`,
		author: {
			id: '533131321554',
			name: 'Guy Hawking',
			avatar: authorIMG,
			criations: 533,
		},
		likes: 623,
		views: 4232,
		sold: 334,
		url: 'https://www.youtube.com/watch?v=ha5vhjHN7hE',
	},
	{
		idPost: 'gsdg24sd121F',
		postImg: imageIMG1,
		description: 'Convite digital animação',
		howMake: `
		Como fazer convite online aniversário luca disney pixar?
1) Escolha um dos muitos modelos disponíveis de convite online aniversário luca disney pixar para você editar.
2) Edite e personalize com muita facilidade seu convite online aniversário luca disney pixar usando nosso editor online.
		`,
		author: {
			id: '131366321554',
			name: 'Guy Hawking',
			avatar: authorIMG,
			criations: 533,
		},
		likes: 723,
		views: 8232,
		sold: 342,
		url: 'https://www.youtube.com/watch?v=ha5vhjHN7hE',
	},
	{
		idPost: 'gsdDSg24sd121F',
		postImg: imageIMG2,
		description: 'Convite digital animação',
		howMake: `
		Como fazer convite online aniversário luca disney pixar?
1) Escolha um dos muitos modelos disponíveis de convite online aniversário luca disney pixar para você editar.
2) Edite e personalize com muita facilidade seu convite online aniversário luca disney pixar usando nosso editor online.
		`,
		author: {
			id: '13132155410',
			name: 'Guy Hawking',
			avatar: authorIMG,
			criations: 533,
		},
		likes: 2023,
		views: 7232,
		sold: 234,
		url: 'https://www.youtube.com/watch?v=ha5vhjHN7hE',
	},
	{
		idPost: '23gsdDSg24sd121F',
		postImg: imageIMG3,
		description: 'Convite digital animação',
		howMake: `
		Como fazer convite online aniversário luca disney pixar?
1) Escolha um dos muitos modelos disponíveis de convite online aniversário luca disney pixar para você editar.
2) Edite e personalize com muita facilidade seu convite online aniversário luca disney pixar usando nosso editor online.
		`,
		author: {
			id: '66131321554',
			name: 'Guy Hawking',
			avatar: authorIMG,
			criations: 533,
		},
		likes: 2023,
		views: 7232,
		sold: 334,
		url: 'https://www.youtube.com/watch?v=ha5vhjHN7hE',
	},
	{
		idPost: 'gsdDSg24sd121F',
		postImg: imageIMG2,
		description: 'Convite digital animação',
		howMake: `
		Como fazer convite online aniversário luca disney pixar?
      1) Escolha um dos muitos modelos disponíveis de convite online aniversário luca disney pixar para você editar.
      2) Edite e personalize com muita facilidade seu convite online aniversário luca disney pixar usando nosso editor online.
		`,
		author: {
			id: '13132421554',
			name: 'Guy Hawking',
			avatar: authorIMG,
			criations: 533,
		},
		likes: 2023,
		views: 7232,
		sold: 134,
		url: 'https://www.youtube.com/watch?v=ha5vhjHN7hE',
	},
];

const InfoPost = () => {
	const [post, setPost] = useState([]);
	const [isLiked, setIsLiked] = useState(false);
	const [loading, setLoading] = useState(true);

	const { idpost } = useParams();

	useEffect(() => {
		const fetchPosts = () => {
			arr.map((e) => {
				if (e.idPost === idpost) {
					setPost(e);
					setLoading(false);
				}
			});
		};

		fetchPosts();
	}, [idpost]);

	const handleLike = () => {
		setIsLiked(!isLiked);
	};

	if (!!loading) {
		return <S.Wrapper>Carregando</S.Wrapper>;
	}

	return (
		<S.Wrapper>
			<S.PostDetails>
				<S.PostPhoto>
					<img src={post.postImg} alt={post.description} />
					<button>EDITAR</button>
				</S.PostPhoto>
				<div>
					<S.PostInfos>
						<aside>
							<ShareIcon sx={{ fontSize: 40 }} />
						</aside>
						<h1>{post.description}</h1>
						<p>{post.howMake}</p>
					</S.PostInfos>

					<S.AuthorInfos>
						<div>
							<Link to={`/author/${post.author.id}`}>
								<img src={post.author.avatar} />{' '}
							</Link>
							<div className='author-infos'>
								<Link to={`/author/${post.author.id}`}>
									{' '}
									<p>{post.author.name}</p>
								</Link>
								<h2>{post.author.criations} Criações</h2>
							</div>
						</div>
						<div className='stats'>
							<div>
								<VisibilityOutlinedIcon />
								{post.views}
							</div>
							<div onClick={handleLike}>
								{!!isLiked ? (
									<ThumbUpIcon color='success' />
								) : (
									<ThumbUpOutlinedIcon />
								)}
								{post.likes}
							</div>
						</div>
					</S.AuthorInfos>
					<p>{post.sold} Pessoas compraram essa arte!</p>
				</div>
			</S.PostDetails>
			<Chips />
			<CardList />
		</S.Wrapper>
	);
};

export default InfoPost;
