import { goldData } from '@/utils';

const PriceInGram = () => {
	return (
		<div className="overflow-x-auto bg-gold-gradient rounded-xl">
			<table className="min-w-full  text-black">
				<thead>
					<tr>
						<th className="py-4 px-4">CARAT | স্বর্ণের ক্যারেট</th>
						<th className="py-4 px-4">Per Gram Price</th>
					</tr>
				</thead>
				<tbody>
					{goldData.map((row, index) => (
						<tr key={index} className="bg-[#CDAA75] even:bg-[#FEEDC6]">
							<td className="py-4 px-4">{row.carat}</td>
							<td className="py-4 px-4">{row.perGram}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PriceInGram;
