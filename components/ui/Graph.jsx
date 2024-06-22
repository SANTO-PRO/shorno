import Image from 'next/image';

const Graph = () => {
	return (
		<div className="overflow-auto bg-gold-gradient rounded-xl">
			<div className="min-w-full h-full flex-center text-black  ">
				<Image
					src="/assets/images/graph.png"
					alt=""
					width={300}
					height={400}
					className="object-fill"
				/>
			</div>
		</div>
	);
};

export default Graph;
