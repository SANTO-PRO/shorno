import Image from 'next/image';
import Button from '../ui/Button';

const Hero = () => {
	return (
		<section className="py-5 md:py-10 h-fit relative">
			{/* <Overlay className="bg-[#101628]/75" /> */}

			<div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
				{/* Text content */}
				<div className="flex flex-col justify-center gap-4 z-30 max-sm:flex-center max-sm:text-center">
					<h1 className="h2-bold text-black">এক টাকায় গোল্ড কিনেন</h1>
					<h1 className="h2-bold text-black">Join Our Waitlist</h1>

					<form className="flex flex-col gap-4 mt-6">
						<input
							type="number"
							placeholder="Please provide your phone number"
							className="input-field"
							required
						/>

						<input
							type="phone"
							placeholder="Please provide your email address"
							className="input-field"
						/>

						<Button
							variant="primary"
							type="submit"
							className="w-fit gold-bg rounded-full !text-black  shadow-inner flex gap-1.5 self-end"
						>
							Join Waitlist
						</Button>
					</form>
				</div>

				{/* Hero Intro image */}
				<div className="w-full flex-start transform scale-x-100 z-30">
					<Image
						src="/assets/images/hero-intro.svg"
						alt="hero intro phone"
						width={50}
						height={50}
						className="w-[590px] h-[560px] max-sm:h-[300px]"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
