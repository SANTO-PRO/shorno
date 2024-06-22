import GoldConverter from '../shared/GoldConverter';
import Graph from '../ui/Graph';
import PriceInGram from '../ui/PriceInGram';
import PriceInVori from '../ui/PriceInVori';

const GoldPriceInfos = () => {
	return (
		<section id="gold-price-infos" className="bg-dark-gradient h-fit py-10">
			<div className="wrapper">
				<div>
					<h2 className="text-3xl text-[#FAF3BA] w-fit border-b-2  pb-4">
						Lorem ipsum dolor sit amet
					</h2>
				</div>

				<div className="flex justify-between  gap-4 py-10 max-xl:flex-wrap max-xl:justify-center max-md:flex-col max-md:pb-0  max-xl:gap-8">
					<Graph />
					<PriceInGram />
					<PriceInVori />
					<GoldConverter />
				</div>
			</div>
		</section>
	);
};

export default GoldPriceInfos;
