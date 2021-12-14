import React from 'react';
import * as S from './styled';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';

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

const removeAcento = (text) => {
	text = text.toLowerCase();
	text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
	text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
	text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
	text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
	text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
	text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
	text = text.replace(/[ ]+/g, '');
	return text.toLowerCase();
};

function Chips() {
	return (
		<S.ChipsWrapper>
			{chips.map((e) => (
				<Link to={`/search/${e.idS}`}>
					<div>
						<Chip
							key={e.idS}
							label={e.search}
							sx={{ fontFamily: 'Roboto', fontWeight: 'bold' }}
						/>
					</div>
				</Link>
			))}
		</S.ChipsWrapper>
	);
}

export default Chips;
