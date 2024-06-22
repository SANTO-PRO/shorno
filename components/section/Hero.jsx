'use client';

import { scrollToSection } from '@/utils';
import Image from 'next/image';
import Button from '../ui/Button';

const Hero = () => {
	return (
		<section className="py-5 md:py-10 z-30 h-fit bg-dark-gradient relative">
			<div className="wrapper grid grid-rows-2 gap-1 md:grid-rows-2 2xl:gap-1">
				{/* Text content */}
				<div className="w-full row-span-1 flex-center flex-col gap-4">
					<div className="flex-center flex-col mb-6 gap-5 max-md:gap-2">
						<h1 className="text-6xl max-lg:text-5xl max-md:text-3xl  font-Siliguri text-[#FAF3BA]">
							১ টাকায় গোল্ড কিনুন!
						</h1>
						<h1 className="text-8xl max-lg:text-7xl max-md:text-4xl font-medium text-[#FAF3BA]">
							Join our waitlist
						</h1>
					</div>

					<div className="relative cursor-pointer">
						<Button
							className="absolute top-24 -left-20 w-40 py-3 flex-center bg-btn-gold-gradient !text-[#0A0E13] !font-semibold !rounded-full text-lg max-xl:top-4 max-md:top-0 cursor-pointer"
							onClick={() => scrollToSection('join')}
						>
							Join
						</Button>
					</div>
				</div>

				{/* Hero Intro image */}
				<div className="row-span-1 flex justify-end ">
					<Image
						src="/assets/images/gold-barflat.svg"
						alt="hero intro phone"
						width={50}
						height={50}
						className="w-[680px] h-[580px] max-sm:h-[300px] absolute -bottom-44 right-44 scale-x-[-1] z-30 max-md:-bottom-[9rem] max-xl:right-0 max-xl:-bottom-56 max-xl:w-[580px] max-md:right-44"
					/>
					<Image
						src="/assets/images/gold-barflat.svg"
						alt="hero intro phone"
						width={50}
						height={50}
						className="w-[680px] h-[580px] max-sm:h-[300px] absolute -bottom-44 left-44 max-md:-bottom-[9rem] max-xl:left-0 max-xl:-bottom-56 max-xl:w-[580px] max-md:left-44"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
