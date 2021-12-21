import {
	randomEmail,
	randomPrice,
	randomCreatedDate,
	randomId,
	randomBoolean,
} from '@mui/x-data-grid-generator';

const invoices = [
	{
		id: randomId(),
		idT: randomId(),
		status: 'Pago',
		user: randomEmail(),
		date: randomCreatedDate(),
		pay: randomCreatedDate(),
		royalties: 2,
		userIndicator: randomEmail(),
		indication: 2,
		value: randomPrice(),
	},
	{
		id: randomId(),
		idT: randomId(),
		status: 'Pago',
		user: randomEmail(),
		date: randomCreatedDate(),
		pay: randomCreatedDate(),
		royalties: 2,
		userIndicator: randomEmail(),
		indication: 2,
		value: randomPrice(),
	},
	{
		id: randomId(),
		idT: randomId(),
		status: 'Pago',
		user: randomEmail(),
		date: randomCreatedDate(),
		pay: randomCreatedDate(),
		royalties: 2,
		userIndicator: randomEmail(),
		indication: 2,
		value: randomPrice(),
	},
	{
		id: randomId(),
		idT: randomId(),
		user: randomEmail(),
		date: randomCreatedDate(),
		pay: randomCreatedDate(),
		royalties: 2,
		userIndicator: randomEmail(),
		indication: 2,
		value: randomPrice(),
	},
];

export default invoices;
