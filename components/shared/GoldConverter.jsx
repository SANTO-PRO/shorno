'use client';

import { useEffect, useState } from 'react';

const GoldConverter = () => {
	const [bdt, setBdt] = useState('');
	const [grams, setGrams] = useState('');

	// gold current rate
	const goldPricePerGram = 8796.34;

	useEffect(() => {
		const bdtValue = parseFloat(bdt);
		if (!isNaN(bdtValue) && bdtValue > 0) {
			setGrams(bdtValue / goldPricePerGram);
		} else {
			setGrams('');
		}
	}, [bdt]);

	useEffect(() => {
		const gramsValue = parseFloat(grams);
		if (!isNaN(gramsValue) && gramsValue > 0) {
			setBdt(gramsValue * goldPricePerGram);
		} else {
			setBdt('');
		}
	}, [grams]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded shadow-md w-full max-w-md">
				<h1 className="text-2xl font-bold mb-4">Gold Converter</h1>
				<div className="mb-4">
					<label htmlFor="bdt" className="block text-gray-700">
						BDT
					</label>
					<input
						type="number"
						id="bdt"
						value={bdt}
						onChange={(e) => setBdt(e.target.value)}
						className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="grams" className="block text-gray-700">
						Grams
					</label>
					<input
						type="number"
						id="grams"
						value={grams}
						onChange={(e) => setGrams(e.target.value)}
						className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
			</div>
		</div>
	);
};

export default GoldConverter;
