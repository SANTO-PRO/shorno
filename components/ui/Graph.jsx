import Image from 'next/image';

const Graph = () => {
	return (
		<div className="overflow-auto bg-gold-gradient rounded-xl border border-[#FDEAC3]">
			<div className="w-[300px] max-md:w-full h-full flex-center flex-col gap-1 text-black overflow-hidden">
				<h2 className="text-xl font-medium w-full text-left pl-1">
					Statistics
				</h2>

				<Image
					src="/assets/images/graph.png"
					alt=""
					width={450}
					height={400}
					className="object-cover"
				/>
			</div>
		</div>
	);
};

export default Graph;
