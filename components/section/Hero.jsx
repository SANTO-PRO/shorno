import Image from 'next/image';
import Button from '../ui/Button';

const Hero = () => {
	return (
		<section className="py-5 md:py-10 h-fit relative">
			<div className="wrapper grid grid-cols-12 gap-5 md:grid-cols-12 2xl:gap-5">
				{/* Text content */}
				<div className="col-span-5  place-content-center">
					<h2 className="h2-bold text-black">To Buy Gold For 1৳ TAKA</h2>
					<h1 className="h1-bold text-black">Join the Waitlist</h1>

					<form className="flex flex-col gap-4 mt-6">
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
					</form>
				</div>

				{/* Hero Intro image */}
				<div className="col-span-7 flex justify-end ">
					<Image
						src="/assets/images/gold-bar.svg"
						alt="hero intro phone"
						width={50}
						height={50}
						className="w-[660px] h-[660px] max-sm:h-[300px]"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
