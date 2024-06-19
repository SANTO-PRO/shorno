import Card from '../ui/Card';

const Graph = () => {
	return (
		<section id="graph" className="bg-dark-gradient h-fit py-10">
			<div className="wrapper">
				<div>
					<h2 className="text-3xl text-[#FAF3BA] w-fit border-b-2  pb-4">
						Lorem ipsum dolor sit amet
					</h2>
				</div>

				<div className="flex gap-4">
					<Card />
				</div>
			</div>
		</section>
	);
};

export default Graph;
