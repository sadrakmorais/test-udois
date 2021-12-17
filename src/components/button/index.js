import React from 'react';
import * as S from './styled';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Button = ({ children, ...rest }) => {
	return (
		<S.Wrapper {...rest}>
			{children}
			<AddOutlinedIcon />
		</S.Wrapper>
	);
};

export default Button;
