import React from 'react';
import * as S from './styled';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Card = ({ post, ...rest }) => {
	return (
		<S.Wrapper {...rest}>
			<S.WrapperPhoto>
				<img src={post.postImg} alt={post.url} />
			</S.WrapperPhoto>
			<S.WrapperInfos>
				<div>
					<VisibilityOutlinedIcon />
					{post.likes}
				</div>
				<div>
					<ThumbUpOutlinedIcon />
					{post.views}
				</div>

				<button>Editar</button>
			</S.WrapperInfos>
		</S.Wrapper>
	);
};

export default Card;
