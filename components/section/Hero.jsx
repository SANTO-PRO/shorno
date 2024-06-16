import Image from 'next/image';
import Button from '../ui/Button';

const Hero = () => {
	return (
		<section className="py-5 md:py-10 h-fit bg-dark-gradient relative">
			<div className="wrapper grid grid-rows-2 gap-1 md:grid-rows-2 2xl:gap-1">
				{/* Text content */}
				<div className="w-full row-span-1 flex-center flex-col gap-4">
					<p className="p-medium-14 text-[#FAF3BA] ">Buy Gold Form Shorno</p>
					<div className="flex-center flex-col">
						<h1 className="text-7xl text-[#FAF3BA]">Join the waitlist</h1>
						<h1 className="text-7xl text-[#FAF3BA]">to Buy Gold for 1৳!</h1>
					</div>
					<p className="w-1/2 p-medium-14 text-center text-[#aaa472] mt-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
						quo! Qui tenetur at fugit consequatur sint excepturi quam omnis
						reprehenderit.
					</p>

					{/* <form className="flex flex-col gap-4">
						<input
							type="phone"
							placeholder="Enter your email address"
							className="input-field"
						/>

						<div className="w-full flex gap-2 ">
							<input
								type="number"
								placeholder="Enter your phone number"
								className="input-field w-2/3"
								required
							/>

							<Button
								variant="primary"
								type="submit"
								className="w-1/3 h-12 rounded-full text-white font-semibold flex gap-1.5 self-end flex-center bg-[#0D0D0D] hover:gold-bg hover:text-black"
							>
								Join Waitlist
							</Button>
						</div>
					</form> */}
					<div className="relative">
						<Button className="absolute top-24 -left-16 w-32 flex-center ">
							Join Waitlist
						</Button>
					</div>
				</div>

				{/* Hero Intro image */}
				<div className="row-span-1 flex justify-end">
					<Image
						src="/assets/images/gold-barflat.svg"
						alt="hero intro phone"
						width={50}
						height={50}
						className="w-[640px] h-[540px] max-sm:h-[300px] absolute -bottom-40 right-40 scale-x-[-1]"
					/>
					<Image
						src="/assets/images/gold-barflat.svg"
						alt="hero intro phone"
						width={50}
						height={50}
						className="w-[640px] h-[540px] max-sm:h-[300px] absolute -bottom-40 left-40"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
