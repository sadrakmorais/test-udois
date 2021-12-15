import React from 'react';
import * as S from './styled';
import PaidIcon from '@mui/icons-material/Paid';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BlockIcon from '@mui/icons-material/Block';
import MessageIcon from '@mui/icons-material/Message';
import TimelapseIcon from '@mui/icons-material/Timelapse';

const MyCards = ({ post, ...rest }) => {
	return (
		<S.Wrapper {...rest}>
			<S.WrapperPhoto>
				<img src={post?.img} alt='img' />
			</S.WrapperPhoto>
			<S.WrapperInfos>
				<S.Icons>
					<div className='edit'>
						<EditIcon />
					</div>
					<div className='delete'>
						<DeleteIcon />
					</div>
					<div className='checked'>
						<CheckCircleOutlineIcon />
					</div>
					<div className='reproved'>
						<BlockIcon />
					</div>

					<div className='lapse'>
						<TimelapseIcon />
					</div>

					<div className='msg'>
						<MessageIcon />
					</div>
				</S.Icons>
				<div>
					<VisibilityOutlinedIcon />
					{post?.views}
				</div>
				<div>
					<PaidIcon />
					{post?.sales}
				</div>
			</S.WrapperInfos>
		</S.Wrapper>
	);
};

export default MyCards;
