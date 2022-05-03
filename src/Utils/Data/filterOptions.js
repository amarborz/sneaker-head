export const filterOptions = [
	{
		name: 'PRICE',
		options: [
			{ option: '$0.00 - 199.99', value: [0, 200], id: '001' },
			{ option: '$200.00 - 399.00', value: [200, 400], id: '002' },
			{ option: '$400.00 +', value: [400, 100000], id: '003' },
			{ option: 'ALL', value: 'ALL', id: '004' },
		],
		id: '1001',
	},
	{
		name: 'GENDER',
		options: [
			{ option: 'MAN', value: 'MAN', id: '005' },
			{ option: 'WOMAN', value: 'WOMAN', id: '006' },
			{ option: 'UNISEX', value: 'UNISEX', id: '007' },
			{ option: 'ALL', value: 'ALL', id: '008' },
		],
		id: '1002',
	},
	{
		name: 'BRAND',
		options: [
			{ option: 'NIKE', value: 'NIKE', id: '009' },
			{ option: 'ADIDAS', value: 'ADIDAS', id: '010' },
			{ option: 'NEW BALANCE', value: 'NEW BALANCE', id: '011' },
			{ option: 'AIR JORDAN', value: 'AIR JORDAN', id: '012' },
			{ option: 'ALL', value: 'ALL', id: '013' },
		],
		id: '1003',
	},
]
